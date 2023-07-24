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
type ActiveVersion = {
    service_id: string
    number: number
    active: boolean
}

type Version = {
    active: boolean
    number: number
}

type Service = {
    versions: Version[]
    deleted_at: string
} & FastlyApiObject

const DELETED_COMMENT="CFN-DELETED";

class Resource extends AbstractFastlyResource<ResourceModel, ActiveVersion, ActiveVersion, ActiveVersion, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel, logger?: LoggerProxy): Promise<ActiveVersion> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };
        let activeVersion: Version;
        try {
            let response : ResponseWithHttpInfo<Service> = await new Fastly.ServiceApi().getServiceWithHttpInfo({service_id: model.serviceId || ''});
            activeVersion = response.response.body.versions.find(v => {return v.active == true})
        } catch (e) {
            if (e.status == 404) {
                throw fastlyNotFoundError;
            }
            throw e;
        }

        if (activeVersion == undefined) {
            throw fastlyNotFoundError;
        }

        return <ActiveVersion> {
            active: activeVersion.active,
            number: activeVersion.number,
            service_id: model.serviceId
        }
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        throw new InvalidRequest(`${this.typeName} resource cannot be listed`);
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel, logger?: LoggerProxy): Promise<ActiveVersion> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };
        const response: ResponseWithHttpInfo<ActiveVersion> = await new Fastly.VersionApi().activateServiceVersionWithHttpInfo({service_id: model.serviceId, version_id: model.versionNumber});
        return response.response.body;
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ActiveVersion> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };
        const response: ResponseWithHttpInfo<ActiveVersion> = await new Fastly.VersionApi().activateServiceVersionWithHttpInfo({service_id: model.serviceId, version_id: model.versionNumber});
        return response.response.body;
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };

        // The currently active version is not passed in from CFN as part of the model as it is not part of the key
        // so we need to look it up first
        let existing = await this.get(model, typeConfiguration);
        await new Fastly.VersionApi().deactivateServiceVersionWithHttpInfo({service_id: existing.service_id, version_id: existing.number});
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: ActiveVersion): ResourceModel {
        if (!from) {
            return model;
        }

        const resourceModel = new ResourceModel({
            ...model,
            serviceId: from.service_id,
            versionNumber: from.number
        });

        return resourceModel;
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
