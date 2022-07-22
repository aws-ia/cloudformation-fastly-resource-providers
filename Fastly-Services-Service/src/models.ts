// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Fastly::Services::Service';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ID: string = '/properties/Id';

    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'Comment' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'comment', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    comment?: Optional<string>;
    @Expose({ name: 'Paused' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'paused', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    paused?: Optional<boolean>;
    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'Service' })
    @Type(() => Service)
    service?: Optional<Service>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.id != null) {
            identifier[this.IDENTIFIER_KEY_ID] = this.id;
        }

        // only return the identifier if it can be used, i.e. if all components are present
        return Object.keys(identifier).length === 1 ? identifier : null;
    }

    @Exclude()
    public getAdditionalIdentifiers(): Array<Dict> {
        const identifiers: Array<Dict> = new Array<Dict>();
        // only return the identifiers if any can be used
        return identifiers.length === 0 ? null : identifiers;
    }
}

export class Service extends BaseModel {
    ['constructor']: typeof Service;


    @Expose({ name: 'Comment' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'comment', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    comment?: Optional<string>;
    @Expose({ name: 'CreatedAt' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'createdAt', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    createdAt?: Optional<string>;
    @Expose({ name: 'CustomerId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'customerId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    customerId?: Optional<string>;
    @Expose({ name: 'DeletedAt' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'deletedAt', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    deletedAt?: Optional<string>;
    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'PublishKey' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'publishKey', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    publishKey?: Optional<string>;
    @Expose({ name: 'Paused' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'paused', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    paused?: Optional<boolean>;
    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'UpdatedAt' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'updatedAt', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    updatedAt?: Optional<string>;
    @Expose({ name: 'Versions' })
    @Type(() => Version)
    versions?: Optional<Array<Version>>;

}

export class Version extends BaseModel {
    ['constructor']: typeof Version;


    @Expose({ name: 'Active' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'active', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    active?: Optional<boolean>;
    @Expose({ name: 'Comment' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'comment', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    comment?: Optional<string>;
    @Expose({ name: 'Deployed' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'deployed', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    deployed?: Optional<boolean>;
    @Expose({ name: 'Locked' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'locked', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    locked?: Optional<boolean>;
    @Expose({ name: 'Number' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'number_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    number_?: Optional<integer>;
    @Expose({ name: 'Staging' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'staging', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    staging?: Optional<boolean>;
    @Expose({ name: 'Testing' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'testing', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    testing?: Optional<boolean>;
    @Expose({ name: 'ServiceId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'serviceId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    serviceId?: Optional<string>;
    @Expose({ name: 'CreatedAt' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'createdAt', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    createdAt?: Optional<string>;
    @Expose({ name: 'DeletedAt' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'deletedAt', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    deletedAt?: Optional<string>;
    @Expose({ name: 'UpdatedAt' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'updatedAt', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    updatedAt?: Optional<string>;

}

export class TypeConfigurationModel extends BaseModel {
    ['constructor']: typeof TypeConfigurationModel;


    @Expose({ name: 'FastlyAccess' })
    @Type(() => FastlyAccess)
    fastlyAccess?: Optional<FastlyAccess>;

}

export class FastlyAccess extends BaseModel {
    ['constructor']: typeof FastlyAccess;


    @Expose({ name: 'Token' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'token', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    token?: Optional<string>;

}

