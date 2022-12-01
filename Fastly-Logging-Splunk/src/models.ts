// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Fastly::Logging::Splunk';

    @Exclude()
    protected readonly IDENTIFIER_KEY_SERVICEID: string = '/properties/ServiceId';
    @Exclude()
    protected readonly IDENTIFIER_KEY_VERSION: string = '/properties/Version';
    @Exclude()
    protected readonly IDENTIFIER_KEY_NAME: string = '/properties/Name';

    @Expose({ name: 'FormatVersion' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'formatVersion', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    formatVersion?: Optional<integer>;
    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'Placement' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'placement', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    placement?: Optional<string>;
    @Expose({ name: 'RequestMaxBytes' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'requestMaxBytes', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    requestMaxBytes?: Optional<integer>;
    @Expose({ name: 'RequestMaxEntries' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'requestMaxEntries', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    requestMaxEntries?: Optional<integer>;
    @Expose({ name: 'ResponseCondition' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'responseCondition', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    responseCondition?: Optional<string>;
    @Expose({ name: 'TlsCaCert' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'tlsCaCert', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    tlsCaCert?: Optional<string>;
    @Expose({ name: 'TlsClientCert' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'tlsClientCert', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    tlsClientCert?: Optional<string>;
    @Expose({ name: 'TlsClientKey' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'tlsClientKey', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    tlsClientKey?: Optional<string>;
    @Expose({ name: 'TlsHostname' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'tlsHostname', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    tlsHostname?: Optional<string>;
    @Expose({ name: 'Token' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'token', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    token?: Optional<string>;
    @Expose({ name: 'Url' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'url', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    url?: Optional<string>;
    @Expose({ name: 'UseTls' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'useTls', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    useTls?: Optional<integer>;
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
    @Expose({ name: 'ServiceId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'serviceId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    serviceId?: Optional<string>;
    @Expose({ name: 'UpdatedAt' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'updatedAt', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    updatedAt?: Optional<string>;
    @Expose({ name: 'Version' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'version', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    version?: Optional<string>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.serviceId != null) {
            identifier[this.IDENTIFIER_KEY_SERVICEID] = this.serviceId;
        }

        if (this.version != null) {
            identifier[this.IDENTIFIER_KEY_VERSION] = this.version;
        }

        if (this.name != null) {
            identifier[this.IDENTIFIER_KEY_NAME] = this.name;
        }

        // only return the identifier if it can be used, i.e. if all components are present
        return Object.keys(identifier).length === 3 ? identifier : null;
    }

    @Exclude()
    public getAdditionalIdentifiers(): Array<Dict> {
        const identifiers: Array<Dict> = new Array<Dict>();
        // only return the identifiers if any can be used
        return identifiers.length === 0 ? null : identifiers;
    }
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

