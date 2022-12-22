// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Fastly::Tls::Domain';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ID: string = '/properties/Id';

    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'Relationships' })
    @Type(() => Relationships)
    relationships?: Optional<Relationships>;
    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Attributes' })
    @Type(() => Attributes)
    attributes?: Optional<Attributes>;

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

export class Relationships extends BaseModel {
    ['constructor']: typeof Relationships;


    @Expose({ name: 'TlsCertificate' })
    @Type(() => TlsCertificate)
    tlsCertificate?: Optional<TlsCertificate>;
    @Expose({ name: 'TlsDomain' })
    @Type(() => TlsDomain)
    tlsDomain?: Optional<TlsDomain>;
    @Expose({ name: 'TlsConfiguration' })
    @Type(() => TlsConfiguration)
    tlsConfiguration?: Optional<TlsConfiguration>;

}

export class TlsCertificate extends BaseModel {
    ['constructor']: typeof TlsCertificate;


    @Expose({ name: 'Data' })
    @Type(() => Data)
    data?: Optional<Data>;

}

export class Data extends BaseModel {
    ['constructor']: typeof Data;


    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;

}

export class TlsDomain extends BaseModel {
    ['constructor']: typeof TlsDomain;


    @Expose({ name: 'Data' })
    @Type(() => Data)
    data?: Optional<Data>;

}

export class TlsConfiguration extends BaseModel {
    ['constructor']: typeof TlsConfiguration;


    @Expose({ name: 'Data' })
    @Type(() => Data)
    data?: Optional<Data>;

}

export class Attributes extends BaseModel {
    ['constructor']: typeof Attributes;


    @Expose({ name: 'CreatedAt' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'createdAt', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    createdAt?: Optional<string>;

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

