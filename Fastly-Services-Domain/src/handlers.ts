import {Domain, ResourceModel, TypeConfigurationModel} from './models';
import {AbstractFastlyResource} from '../../Fastly-Common/src/abstract-fastly-resource';
import {CaseTransformer, transformObjectCase} from '../../Fastly-Common/src/util';
import {fastlyNotFoundError, ResponseWithHttpInfo} from '../../Fastly-Common/src/types';
// We have to use @ts-ignore here as the "fastly" lib doesn't have TypeScript definitions
// @ts-ignore
import * as Fastly from "fastly";

class Resource extends AbstractFastlyResource<ResourceModel, Domain, Domain, Domain, TypeConfigurationModel> {

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Domain> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        const response: ResponseWithHttpInfo = await new Fastly.DomainApi().getDomainWithHttpInfo({
            ...transformObjectCase(model.toJSON(), CaseTransformer.PASCAL_TO_SNAKE),
            domain_name: model.domain?.name || model.name
        });
        const domain = new Domain(transformObjectCase(response.response.body, CaseTransformer.SNAKE_TO_CAMEL));
        // When a resource is deleted, the GET still returns the resource but with the "deletedAt" field set.
        // When this happens, we should throw a `NotFound` exception to CloudFormation instead of returning the resource
        if (domain.deletedAt !== null) {
            throw fastlyNotFoundError;
        }
        return domain;
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        const response: ResponseWithHttpInfo = await new Fastly.DomainApi().listDomainsWithHttpInfo(transformObjectCase(model.toJSON(), CaseTransformer.PASCAL_TO_SNAKE));
        return response.response.body
            .map((domainPayload: any) => {
                const domain = new Domain(transformObjectCase(domainPayload, CaseTransformer.SNAKE_TO_CAMEL));
                return new ResourceModel({
                    ...model,
                    domain: domain
                });
            })
            .filter((newModel: ResourceModel) => newModel.domain.deletedAt === null)
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Domain> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        const response: ResponseWithHttpInfo = await new Fastly.DomainApi().createDomainWithHttpInfo(transformObjectCase(model.toJSON(), CaseTransformer.PASCAL_TO_SNAKE));
        return new Domain(transformObjectCase(response.response.body, CaseTransformer.SNAKE_TO_CAMEL));
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Domain> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        const response: ResponseWithHttpInfo = await new Fastly.DomainApi().updateDomainWithHttpInfo({
            ...transformObjectCase(model.toJSON(), CaseTransformer.PASCAL_TO_SNAKE),
            domain_name: model.domain.name
        });
        return new Domain(transformObjectCase(response.response.body, CaseTransformer.SNAKE_TO_CAMEL));
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        await new Fastly.DomainApi().deleteDomainWithHttpInfo({
            ...transformObjectCase(model.toJSON(), CaseTransformer.PASCAL_TO_SNAKE),
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
