import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractFastlyResource} from '../../Fastly-Common/src/abstract-fastly-resource';
import {CaseTransformer, Transformer} from '../../Fastly-Common/src/util';
import {FastlyApiObject, fastlyNotFoundError, ResponseWithHttpInfo} from '../../Fastly-Common/src/types';
// We have to use @ts-ignore here as the "fastly" lib doesn't have TypeScript definitions
// @ts-ignore
import * as Fastly from "fastly";
import {version} from '../package.json';

type Healthcheck = {
    version: number
} & FastlyApiObject;

class Resource extends AbstractFastlyResource<ResourceModel, Healthcheck, Healthcheck, Healthcheck, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Healthcheck> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };
        const response: ResponseWithHttpInfo<Healthcheck> = await new Fastly.HealthcheckApi().getHealthcheckWithHttpInfo({
            ...Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                .transform(),
            healthcheck_name: model.name
        });
        // When a resource is deleted, the GET still returns the resource but with the "deletedAt" field set.
        // When this happens, we should throw a `NotFound` exception to CloudFormation instead of returning the resource
        if (response.response.body.deleted_at !== null) {
            throw fastlyNotFoundError;
        }
        return response.response.body;
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };
        const response: ResponseWithHttpInfo<Healthcheck[]> = await new Fastly.HealthcheckApi().listHealthchecksWithHttpInfo(Transformer.for(model.toJSON())
            .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
            .transform());
        return response.response.body
            .map(healthcheckPayload => this.setModelFrom(model, healthcheckPayload))
            .filter(newModel => newModel.deletedAt === null)
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Healthcheck> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };
        const response: ResponseWithHttpInfo<Healthcheck> = await new Fastly.HealthcheckApi().createHealthcheckWithHttpInfo(Transformer.for(model.toJSON())
            .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
            .transform());
        return response.response.body;
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Healthcheck> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };
        const response: ResponseWithHttpInfo<Healthcheck> = await new Fastly.HealthcheckApi().updateHealthcheckWithHttpInfo({
            ...Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                .transform(),
            healthcheck_name: model.name
        });
        return response.response.body;
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };
        await new Fastly.HealthcheckApi().deleteHealthcheckWithHttpInfo({
            ...Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                .transform(),
            healthcheck_name: model.name
        });
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: Healthcheck): ResourceModel {
        if (!from) {
            return model;
        }
        model.healthcheckName = model.name;

        return new ResourceModel({
            ...model,
            ...Transformer.for(from)
                .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
                .forModelIngestion()
                .transform(),
            version: from.version.toString()
        });
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
