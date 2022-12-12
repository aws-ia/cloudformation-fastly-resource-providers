import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractFastlyResource} from '../../Fastly-Common/src/abstract-fastly-resource';
import {CaseTransformer, Transformer} from '../../Fastly-Common/src/util';
import {FastlyApiObject, fastlyNotFoundError, ResponseWithHttpInfo} from '../../Fastly-Common/src/types';
// We have to use @ts-ignore here as the "fastly" lib doesn't have TypeScript definitions
// @ts-ignore
import * as Fastly from "fastly";
import {version} from '../package.json';
import { plainToClass, classToPlain } from 'class-transformer'

type LogAwsS3 = {
    versions: Version[]
    deleted_at: string
} & FastlyApiObject

type Version = {
    active: boolean
    number: number
}

class Resource extends AbstractFastlyResource<ResourceModel, LogAwsS3, LogAwsS3, LogAwsS3, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<LogAwsS3> {
        this.setAuthenticationAndTypeConfiguration(typeConfiguration);
        const response: ResponseWithHttpInfo<LogAwsS3> = await new Fastly.LoggingS3Api().getLogAwsS3WithHttpInfo({service_id: model.serviceId || '', version_id: model.version || '', logging_s3_name: model.name || ''});
        // When a resource is deleted, the GET still returns the resource but with the "deletedAt" field set.
        // When this happens, we should throw a `NotFound` exception to CloudFormation instead of returning the resource
        if (response.response.body.deleted_at !== null) {
            throw fastlyNotFoundError;
        }
        return response.response.body;
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        this.setAuthenticationAndTypeConfiguration(typeConfiguration);
        const response: ResponseWithHttpInfo<LogAwsS3[]> = await new Fastly.LoggingS3Api().listLogAwsS3WithHttpInfo({service_id: model.serviceId || '', version_id: model.version || ''});

        return response.response.body
            .map(servicePayload => this.setModelFrom(new ResourceModel(), servicePayload))
            .filter(newModel => newModel.deletedAt === null)
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<LogAwsS3> {
        this.setAuthenticationAndTypeConfiguration(typeConfiguration);
        const response: ResponseWithHttpInfo<LogAwsS3> = await new Fastly.LoggingS3Api().createLogAwsS3WithHttpInfo({
            service_id: model.serviceId,
            version_id: model.version,
            ...Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                .transform()
        });
        return response.response.body;
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<LogAwsS3> {
        this.setAuthenticationAndTypeConfiguration(typeConfiguration)
        const response: ResponseWithHttpInfo<LogAwsS3> = await new Fastly.LoggingS3Api().updateLogAwsS3WithHttpInfo({
            version_id: model.version,
            service_id: model.serviceId,
            ...Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                .transform()
        });
        return response.response.body;
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        this.setAuthenticationAndTypeConfiguration(typeConfiguration)
        await new Fastly.LoggingS3Api().deleteLogAwsS3WithHttpInfo({service_id: model.serviceId || '', version_id: model.version || '', logging_s3_name: model.name || ''});
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

    setModelFrom(model: ResourceModel, from?: LogAwsS3): ResourceModel {
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
