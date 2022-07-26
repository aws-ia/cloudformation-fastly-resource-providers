import {Healthcheck, ResourceModel, TypeConfigurationModel} from './models';
import {AbstractFastlyResource} from '../../Fastly-Common/src/abstract-fastly-resource';
import {CaseTransformer, transformObjectCase} from '../../Fastly-Common/src/util';
import {fastlyNotFoundError, ResponseWithHttpInfo} from '../../Fastly-Common/src/types';
// We have to use @ts-ignore here as the "fastly" lib doesn't have TypeScript definitions
// @ts-ignore
import * as Fastly from "fastly";

class Resource extends AbstractFastlyResource<ResourceModel, Healthcheck, Healthcheck, Healthcheck, TypeConfigurationModel> {

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Healthcheck> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        const response: ResponseWithHttpInfo = await new Fastly.HealthcheckApi().getHealthcheckWithHttpInfo({
            ...transformObjectCase(model.toJSON(), CaseTransformer.PASCAL_TO_SNAKE),
            healthcheck_name: model.healthcheck?.name || model.name
        });
        const backend = new Healthcheck(transformObjectCase(response.response.body, CaseTransformer.SNAKE_TO_CAMEL));
        // When a resource is deleted, the GET still returns the resource but with the "deletedAt" field set.
        // When this happens, we should throw a `NotFound` exception to CloudFormation instead of returning the resource
        if (backend.deletedAt !== null) {
            throw fastlyNotFoundError;
        }
        return backend;
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        const response: ResponseWithHttpInfo = await new Fastly.HealthcheckApi().listHealthchecksWithHttpInfo(transformObjectCase(model.toJSON(), CaseTransformer.PASCAL_TO_SNAKE));
        return response.response.body
            .map((healthcheckPayload: any) => {
                const backend = new Healthcheck(transformObjectCase(healthcheckPayload, CaseTransformer.SNAKE_TO_CAMEL));
                return new ResourceModel({
                    ...model,
                    healthcheck: backend
                });
            })
            .filter((newModel: ResourceModel) => newModel.healthcheck.deletedAt === null)
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Healthcheck> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        const response: ResponseWithHttpInfo = await new Fastly.HealthcheckApi().createHealthcheckWithHttpInfo(transformObjectCase(model.toJSON(), CaseTransformer.PASCAL_TO_SNAKE));
        return new Healthcheck(transformObjectCase(response.response.body, CaseTransformer.SNAKE_TO_CAMEL));
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Healthcheck> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        const response: ResponseWithHttpInfo = await new Fastly.HealthcheckApi().updateHealthcheckWithHttpInfo({
            ...transformObjectCase(model.toJSON(), CaseTransformer.PASCAL_TO_SNAKE),
            healthcheck_name: model.healthcheck.name
        });
        return new Healthcheck(transformObjectCase(response.response.body, CaseTransformer.SNAKE_TO_CAMEL));
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        await new Fastly.HealthcheckApi().deleteHealthcheckWithHttpInfo({
            ...transformObjectCase(model.toJSON(), CaseTransformer.PASCAL_TO_SNAKE),
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
        model.healthcheck = from;
        return model;
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
