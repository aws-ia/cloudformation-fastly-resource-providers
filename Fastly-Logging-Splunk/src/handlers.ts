import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractFastlyResource} from '../../Fastly-Common/src/abstract-fastly-resource';
import {CaseTransformer, Transformer} from '../../Fastly-Common/src/util';
import {FastlyApiObject, fastlyNotFoundError, ResponseWithHttpInfo} from '../../Fastly-Common/src/types';
// We have to use @ts-ignore here as the "fastly" lib doesn't have TypeScript definitions
// @ts-ignore
import * as Fastly from "fastly";
import {version} from '../package.json';
import { plainToClass, classToPlain } from 'class-transformer'

type LoggingSplunk = {
    versions: Version[]
    deleted_at: string
} & FastlyApiObject

type Version = {
    active: boolean
    number: number
}

class Resource extends AbstractFastlyResource<ResourceModel, LoggingSplunk, LoggingSplunk, LoggingSplunk, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<LoggingSplunk> {
        this.setAuthenticationAndTypeConfiguration(typeConfiguration);
        const response: ResponseWithHttpInfo<LoggingSplunk> = await new Fastly.LoggingSplunkApi().getLogSplunkWithHttpInfo({service_id: model.serviceId || '', version_id: model.versionId || '', logging_splunk_name: model.name || ''});
        // When a resource is deleted, the GET still returns the resource but with the "deletedAt" field set.
        // When this happens, we should throw a `NotFound` exception to CloudFormation instead of returning the resource
        if (response.response.body.deleted_at !== null) {
            throw fastlyNotFoundError;
        }
        return response.response.body;
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        this.setAuthenticationAndTypeConfiguration(typeConfiguration);
        const response: ResponseWithHttpInfo<LoggingSplunk[]> = await new Fastly.LoggingSplunkApi().listLogSplunkWithHttpInfo({service_id: model.serviceId || '', version_id: model.versionId || ''});

        return response.response.body
            .map(servicePayload => this.setModelFrom(new ResourceModel(), servicePayload))
            .filter(newModel => newModel.deletedAt === null)
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<LoggingSplunk> {
        this.setAuthenticationAndTypeConfiguration(typeConfiguration);
        const response: ResponseWithHttpInfo<LoggingSplunk> = await new Fastly.LoggingSplunkApi().createLogSplunkWithHttpInfo({
            service_id: model.serviceId,
            version_id: model.versionId,
            ...Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                .transform()
        });
        return response.response.body;
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<LoggingSplunk> {
        this.setAuthenticationAndTypeConfiguration(typeConfiguration)
        const response: ResponseWithHttpInfo<LoggingSplunk> = await new Fastly.LoggingSplunkApi().updateLogSplunkWithHttpInfo({
            version_id: model.versionId,
            service_id: model.serviceId,
            logging_splunk_name: model.name,
            ...Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                .transform()
        });
        return response.response.body;
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        this.setAuthenticationAndTypeConfiguration(typeConfiguration)
        await new Fastly.LoggingSplunkApi().deleteLogSplunkWithHttpInfo({service_id: model.serviceId || '', version_id: model.versionId || '', logging_splunk_name: model.name || ''});
    }

    setAuthenticationAndTypeConfiguration(typeConfiguration?: TypeConfigurationModel) {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: LoggingSplunk): ResourceModel {
        if (!from) {
            return model;
        }

        let result = new ResourceModel({
            ...model,
            ...Transformer.for(from)
                .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
                .forModelIngestion()
                .transform()
        });
        let plainObj = classToPlain(result);
        return plainToClass(ResourceModel, plainObj, { excludeExtraneousValues: true });
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
