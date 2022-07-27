import {Domain, ResourceModel, TypeConfigurationModel} from './models';
import {AbstractFastlyResource} from '../../Fastly-Common/src/abstract-fastly-resource';
import {CaseTransformer, Transformer} from '../../Fastly-Common/src/util';
import {fastlyNotFoundError, ResponseWithHttpInfo} from '../../Fastly-Common/src/types';
// We have to use @ts-ignore here as the "fastly" lib doesn't have TypeScript definitions
// @ts-ignore
import * as Fastly from "fastly";

class Resource extends AbstractFastlyResource<ResourceModel, Domain, Domain, Domain, TypeConfigurationModel> {

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Domain> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        const response: ResponseWithHttpInfo = await new Fastly.DomainApi().getDomainWithHttpInfo({
            ...Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                .transform(),
            domain_name: model.domain?.name || model.name
        });
        const domain = new Domain(Transformer.for(response.response.body)
            .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
            .forModelIngestion()
            .transform());
        // When a resource is deleted, the GET still returns the resource but with the "deletedAt" field set.
        // When this happens, we should throw a `NotFound` exception to CloudFormation instead of returning the resource
        if (domain.deletedAt !== null) {
            throw fastlyNotFoundError;
        }
        return domain;
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        const response: ResponseWithHttpInfo = await new Fastly.DomainApi().listDomainsWithHttpInfo(Transformer.for(model.toJSON())
            .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
            .transform());
        return response.response.body
            .map((domainPayload: any) => {
                const domain = new Domain(Transformer.for(domainPayload)
                    .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
                    .forModelIngestion()
                    .transform());
                return new ResourceModel({
                    ...model,
                    domain: domain
                });
            })
            .filter((newModel: ResourceModel) => newModel.domain.deletedAt === null)
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Domain> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        const response: ResponseWithHttpInfo = await new Fastly.DomainApi().createDomainWithHttpInfo(Transformer.for(model.toJSON())
            .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
            .transform());
        return new Domain(Transformer.for(response.response.body)
            .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
            .forModelIngestion()
            .transform());
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Domain> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        const response: ResponseWithHttpInfo = await new Fastly.DomainApi().updateDomainWithHttpInfo({
            ...Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                .transform(),
            domain_name: model.domain.name
        });
        return new Domain(Transformer.for(response.response.body)
            .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
            .forModelIngestion()
            .transform());
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        await new Fastly.DomainApi().deleteDomainWithHttpInfo({
            ...Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                .transform(),
            domain_name: model.name
        });
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: Domain): ResourceModel {
        if (!from) {
            return model;
        }
        model.domain = from;
        return model;
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
