import {ResourceModel, Service, TypeConfigurationModel, Version} from './models';
import {AbstractFastlyResource} from '../../Fastly-Common/src/abstract-fastly-resource';
import {CaseTransformer, Transformer} from '../../Fastly-Common/src/util';
import {fastlyNotFoundError, ResponseWithHttpInfo} from '../../Fastly-Common/src/types';
// We have to use @ts-ignore here as the "fastly" lib doesn't have TypeScript definitions
// @ts-ignore
import * as Fastly from "fastly";

class Resource extends AbstractFastlyResource<ResourceModel, Service, Service, Service, TypeConfigurationModel> {

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Service> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        const response: ResponseWithHttpInfo = await new Fastly.ServiceApi().getServiceWithHttpInfo({service_id: model.id || ''});
        const service = this.getServiceFrom(response.response.body);
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
                service: this.getServiceFrom(response.response.body)
            }))
            .filter((newModel: ResourceModel) => newModel.service.deletedAt === null)
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Service> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        const response: ResponseWithHttpInfo = await new Fastly.ServiceApi().createServiceWithHttpInfo(Transformer.for(model.toJSON())
            .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
            .transform());
        return this.getServiceFrom(response.response.body);
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Service> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        const response: ResponseWithHttpInfo = await new Fastly.ServiceApi().updateServiceWithHttpInfo({
            service_id: model.id,
            ...Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                .transform()
        });
        return this.getServiceFrom(response.response.body);
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
        if (Array.isArray(from.versions)) {
            model.activeVersionId = from.versions.find(v => v.active === true)?.number_.toString() || '';
            model.latestVersionId = from.versions.reduce((max, v) => max.number_ > v.number_ ? max : v)?.number_.toString() || '';
        }
        return model;
    }

    private getServiceFrom(payload: any) {
        const service = new Service(Transformer.for(payload)
            .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
            .forModelIngestion()
            .transform());
        service.versions = (payload.versions || []).map((versionPayload: any) => new Version(Transformer.for(versionPayload)
            .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
            .forModelIngestion()
            .transform()));
        return service;
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
