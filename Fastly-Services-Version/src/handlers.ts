import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractFastlyResource} from '../../Fastly-Common/src/abstract-fastly-resource';
import {FastlyApiObject, fastlyNotFoundError, ResponseWithHttpInfo} from '../../Fastly-Common/src/types';
// We have to use @ts-ignore here as the "fastly" lib doesn't have TypeScript definitions
// @ts-ignore
import * as Fastly from "fastly";
import {version} from '../package.json';
import {exceptions, LoggerProxy} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {InvalidRequest} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib/dist/exceptions";

// The types below are only partial representation of what the API is returning. It's only needed for TypeScript niceties
type ServiceVersion = {
    comment: string
    service_id: string
    number: string
} & FastlyApiObject

const DELETED_COMMENT="CFN-DELETED";

class Resource extends AbstractFastlyResource<ResourceModel, ServiceVersion, ServiceVersion, ServiceVersion, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel, logger?: LoggerProxy): Promise<ServiceVersion> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };
        let response: ResponseWithHttpInfo<ServiceVersion>;
        try {
            response = await new Fastly.VersionApi().getServiceVersionWithHttpInfo({service_id: model.serviceId || '', version_id: model.versionNumber || ''});
        } catch (e) {
            if (e.status == 404) {
                throw fastlyNotFoundError;
            }
            throw e;
        }

        // When a resource is deleted, the GET still returns the resource but with the "deletedAt" field set.
        // When this happens, we should throw a `NotFound` exception to CloudFormation instead of returning the resource
        if (response.response.body.deleted_at !== null || DELETED_COMMENT == response.response.body.comment) {
            throw fastlyNotFoundError;
        }
        return response.response.body;
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        throw new InvalidRequest(`${this.typeName} resource cannot be listed`);
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel, logger?: LoggerProxy): Promise<ServiceVersion> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };
        const response: ResponseWithHttpInfo<ServiceVersion> = await new Fastly.VersionApi().createServiceVersionWithHttpInfo({service_id: model.serviceId});
        return response.response.body;
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ServiceVersion> {
        throw new exceptions.NotUpdatable;
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };
        await new Fastly.VersionApi().updateServiceVersionWithHttpInfo({service_id: model.serviceId, version_id: model.versionNumber, comment: DELETED_COMMENT});
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: ServiceVersion): ResourceModel {
        if (!from) {
            return model;
        }

        const resourceModel = new ResourceModel({
            ...model,
            serviceId: from.service_id,
            versionNumber: from.number,
            comment: from.comment,
            createdAt: from.created_at,
            updatedAt: from.updated_at,
            deletedAt: from.deleted_at
        });

        return resourceModel;
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
