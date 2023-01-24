import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractFastlyResource} from '../../Fastly-Common/src/abstract-fastly-resource';
import {CaseTransformer, Transformer} from '../../Fastly-Common/src/util';
import {FastlyApiObject, fastlyNotFoundError, ResponseWithHttpInfo} from '../../Fastly-Common/src/types';
// We have to use @ts-ignore here as the "fastly" lib doesn't have TypeScript definitions
// @ts-ignore
import * as Fastly from "fastly";
import {version} from '../package.json';
import { classToPlain, plainToClass } from 'class-transformer';

// The type below are only partial representation of what the API is returning. It's only needed for TypeScript niceties
type CertificatePayload = {
    data: any
} & FastlyApiObject

class Resource extends AbstractFastlyResource<ResourceModel, CertificatePayload, CertificatePayload, CertificatePayload, TypeConfigurationModel> {
    
    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<CertificatePayload> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };
        const response: ResponseWithHttpInfo<CertificatePayload> = await new Fastly.TlsCertificatesApi().getTlsCertWithHttpInfo({
            tls_certificate_id: model.id || ''
        });
        return response.response.body.data;
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };
        const response: ResponseWithHttpInfo<CertificatePayload> = await new Fastly.TlsCertificatesApi().listTlsCertsWithHttpInfo();
        
        return response.response.body.data.map((pk: any) => {
            return this.setModelFrom(new ResourceModel(), pk);
        });
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<CertificatePayload> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };
        const response = await new Fastly.TlsCertificatesApi().createTlsCertWithHttpInfo({
            tls_certificate: {
                data: {
                    ...Transformer.for(model.toJSON())
                    .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                    .transform()
                }
            }
        });
        return response.response.body.data;
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<CertificatePayload> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };
        const response: ResponseWithHttpInfo<CertificatePayload> = await new Fastly.TlsCertificatesApi().updateTlsCertWithHttpInfo({
            tls_certificate_id: model.id,
            tls_certificate: {
                data: {
                    ...Transformer.for(model.toJSON())
                    .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                    .transform(),
                }
            }
            
        });
        return response.response.body;
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };
        await new Fastly.TlsCertificatesApi().deleteTlsCertWithHttpInfo({
            tls_certificate_id: model.id || ''
        });
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: CertificatePayload): ResourceModel {
        if (!from) {
            return model;
        }
        const resourceModel =  new ResourceModel({
            ...model,
            ...Transformer.for(from)
                .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
                .forModelIngestion()
                .transform()
        });

        return plainToClass(ResourceModel,
            classToPlain(resourceModel),
	        { excludeExtraneousValues: true });
    }
    
}

// @ts-ignore // if running against v1.0.1 or earlier of plugin the 5th argument is not known but best to ignored (runtime code may warn)
export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel)!;

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
