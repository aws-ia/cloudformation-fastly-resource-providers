import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractFastlyResource} from '../../Fastly-Common/src/abstract-fastly-resource';
import {CaseTransformer, Transformer} from '../../Fastly-Common/src/util';
import {FastlyApiObject, fastlyNotFoundError, ResponseWithHttpInfo} from '../../Fastly-Common/src/types';
// We have to use @ts-ignore here as the "fastly" lib doesn't have TypeScript definitions
// @ts-ignore
import * as Fastly from "fastly";
import {version} from '../package.json';

// The types below are only partial representation of what the API is returning. It's only needed for TypeScript niceties
type Service = {
    versions: Version[]
    deleted_at: string
} & FastlyApiObject

type Version = {
    active: boolean
    number: number
}

class Resource extends AbstractFastlyResource<ResourceModel, Service, Service, Service, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Service> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };
        const response: ResponseWithHttpInfo<Service> = await new Fastly.ServiceApi().getServiceWithHttpInfo({service_id: model.id || ''});
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
        const response: ResponseWithHttpInfo<Service[]> = await new Fastly.ServiceApi().listServicesWithHttpInfo();
        return response.response.body
            .map(servicePayload => this.setModelFrom(new ResourceModel(), servicePayload))
            .filter(newModel => newModel.deletedAt === null)
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Service> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };
        const response: ResponseWithHttpInfo<Service> = await new Fastly.ServiceApi().createServiceWithHttpInfo(Transformer.for(model.toJSON())
            .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
            .transform());
        return response.response.body;
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Service> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };
        const response: ResponseWithHttpInfo<Service> = await new Fastly.ServiceApi().updateServiceWithHttpInfo({
            service_id: model.id,
            ...Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                .transform()
        });
        return response.response.body;
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };
        await new Fastly.ServiceApi().deleteServiceWithHttpInfo({service_id: model.id});
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: Service): ResourceModel {
        if (!from) {
            return model;
        }
        if (Array.isArray(from.versions)) {
            model.activeVersionId = from.versions.find(v => v.active === true)?.number.toString() || '';
            model.latestVersionId = from.versions.reduce((max, v) => max.number > v.number ? max : v)?.number.toString() || '';
        }

        return new ResourceModel({
            ...model,
            ...Transformer.for(from)
                .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
                .forModelIngestion()
                .transform()
        });
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
