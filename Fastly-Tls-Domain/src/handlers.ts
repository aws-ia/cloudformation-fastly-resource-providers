import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractFastlyResource} from '../../Fastly-Common/src/abstract-fastly-resource';
import {CaseTransformer, Transformer} from '../../Fastly-Common/src/util';
import {FastlyApiObject, fastlyNotFoundError, ResponseWithHttpInfo} from '../../Fastly-Common/src/types';
// We have to use @ts-ignore here as the "fastly" lib doesn't have TypeScript definitions
// @ts-ignore
import * as Fastly from "fastly";
import {version} from '../package.json';
import { classToPlain, plainToClass } from 'class-transformer';
import {exceptions} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";

// The type below are only partial representation of what the API is returning. It's only needed for TypeScript niceties
type DomainPayload = {
    data: any
} & FastlyApiObject

class Resource extends AbstractFastlyResource<ResourceModel, DomainPayload, DomainPayload, DomainPayload, TypeConfigurationModel> {
    
    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<DomainPayload> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@ RAJESH : ');
        const response: ResponseWithHttpInfo<DomainPayload> = await new Fastly.TlsActivationsApi().getTlsActivationWithHttpInfo({
            tls_activation_id: model.id || ''
        });
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@Create : ',response.response.body.data);
        console.log(`\n\n####################Create request: ${JSON.stringify(response.response.body.data,null,4)}`);
        return response.response.body.data;
    }

    async list(initialModel: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };
        const response: ResponseWithHttpInfo<DomainPayload> = await new Fastly.TlsDomainsApi().listTlsDomainsWithHttpInfo();

        return response.response.body.data.map((pk: any) => {
            // Id is returned inside the response, need's to be reset in order for ctv tests to pass
            const data = pk.relationships.tls_activations.data
            if (data.length > 0){ 
                pk.id = data[0].id
            } else {
                const deleted = new ResourceModel()
                deleted.id = pk.id;
                return deleted;
            }
            return this.setModelFrom(new ResourceModel(), pk);
        });
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<DomainPayload> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@ RAJESH ######');
        console.log(`\n\n#####################Create request: ${JSON.stringify(model.toJSON(),null,4)}`);
        const response = await new Fastly.TlsActivationsApi().createTlsActivationWithHttpInfo({
            tls_activation: {
                data: {
                    ...Transformer.for(model.toJSON())
                    .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                    .transform()
                }
            }
        });
        return response.response.body.data;
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<DomainPayload> {
        throw new exceptions.NotUpdatable();
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        Fastly.ApiClient.instance.authenticate(typeConfiguration?.fastlyAccess.token);
        Fastly.ApiClient.instance.defaultHeaders = {
            'User-Agent': this.userAgent
        };
        await new Fastly.TlsActivationsApi().deleteTlsActivationWithHttpInfo({
            tls_activation_id: model.id || ''
        });
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: DomainPayload): ResourceModel {
        if (!from) {
            return model;
        }
        const resourceModel =  new ResourceModel({
            ...model,
            ...Transformer.for(from)
                .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
                .forModelIngestion()
                .transform(),
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
