import {ResourceModel, Service, TypeConfigurationModel} from './models';
import {AbstractFastlyResource} from '../../Fastly-Common/src/abstract-fastly-resource';
import {CaseTransformer, transformObjectCase} from '../../Fastly-Common/src/util';
import {fastlyNotFoundError, ResponseWithHttpInfo} from '../../Fastly-Common/src/types';
// We have to use @ts-ignore here as the "fastly" lib doesn't have TypeScript definitions
// @ts-ignore
import * as Fastly from "fastly";

class Resource extends AbstractFastlyResource<ResourceModel, Service, Service, Service, TypeConfigurationModel> {

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Service> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        const response: ResponseWithHttpInfo = await new Fastly.ServiceApi().getServiceWithHttpInfo({service_id: model.id || ''});
        const service = new Service(transformObjectCase(response.response.body, CaseTransformer.SNAKE_TO_CAMEL));
        // When a resource is deleted, the GET still returns the resource but with the "deletedAt" field set.
        // When this happens, we should throw a `NotFound` exception to CloudFormation instead of returning the resource
        if (service.deletedAt !== null) {
            throw fastlyNotFoundError;
        }
        return service;
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        const response: ResponseWithHttpInfo = await new Fastly.ServiceApi().listServicesWithHttpInfo();
        return response.response.body
            .map((servicePayload: any) => new ResourceModel({
                id: servicePayload.id,
                service: new Service(transformObjectCase(servicePayload, CaseTransformer.SNAKE_TO_CAMEL))
            }))
            .filter((newModel: ResourceModel) => newModel.service.deletedAt === null)
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Service> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        const response: ResponseWithHttpInfo = await new Fastly.ServiceApi().createServiceWithHttpInfo(transformObjectCase(model.toJSON(), CaseTransformer.PASCAL_TO_SNAKE));
        return new Service(transformObjectCase(response.response.body, CaseTransformer.SNAKE_TO_CAMEL));
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Service> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        const response: ResponseWithHttpInfo = await new Fastly.ServiceApi().updateServiceWithHttpInfo({
            service_id: model.id,
            ...transformObjectCase(model.toJSON(), CaseTransformer.PASCAL_TO_SNAKE)
        });
        return new Service(transformObjectCase(response.response.body, CaseTransformer.SNAKE_TO_CAMEL));
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        await new Fastly.ServiceApi().deleteServiceWithHttpInfo({service_id: model.id});
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: Service): ResourceModel {
        if (!from) {
            return model;
        }
        model.service = from;
        if (from.id) {
            model.id = from.id;
        }
        return model;
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
