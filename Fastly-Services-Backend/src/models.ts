// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Fastly::Services::Backend';

    @Exclude()
    protected readonly IDENTIFIER_KEY_NAME: string = '/properties/Name';
    @Exclude()
    protected readonly IDENTIFIER_KEY_SERVICEID: string = '/properties/ServiceId';
    @Exclude()
    protected readonly IDENTIFIER_KEY_VERSIONID: string = '/properties/VersionId';

    @Expose({ name: 'Address' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'address', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    address?: Optional<string>;
    @Expose({ name: 'AutoLoadbalance' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'autoLoadbalance', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    autoLoadbalance?: Optional<boolean>;
    @Expose({ name: 'BetweenBytesTimeout' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'betweenBytesTimeout', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    betweenBytesTimeout?: Optional<integer>;
    @Expose({ name: 'ClientCert' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'clientCert', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    clientCert?: Optional<string>;
    @Expose({ name: 'Comment' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'comment', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    comment?: Optional<string>;
    @Expose({ name: 'ConnectTimeout' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'connectTimeout', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    connectTimeout?: Optional<integer>;
    @Expose({ name: 'FirstByteTimeout' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'firstByteTimeout', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    firstByteTimeout?: Optional<integer>;
    @Expose({ name: 'Healthcheck' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'healthcheck', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    healthcheck?: Optional<string>;
    @Expose({ name: 'Ipv4' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'ipv4', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    ipv4?: Optional<string>;
    @Expose({ name: 'Ipv6' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'ipv6', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    ipv6?: Optional<string>;
    @Expose({ name: 'MaxConn' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'maxConn', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    maxConn?: Optional<integer>;
    @Expose({ name: 'MaxTlsVersion' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'maxTlsVersion', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    maxTlsVersion?: Optional<string>;
    @Expose({ name: 'MinTlsVersion' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'minTlsVersion', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    minTlsVersion?: Optional<string>;
    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'OverrideHost' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'overrideHost', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    overrideHost?: Optional<string>;
    @Expose({ name: 'Port' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'port', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    port?: Optional<integer>;
    @Expose({ name: 'RequestCondition' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'requestCondition', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    requestCondition?: Optional<string>;
    @Expose({ name: 'Shield' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'shield', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    shield?: Optional<string>;
    @Expose({ name: 'SslCaCert' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'sslCaCert', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    sslCaCert?: Optional<string>;
    @Expose({ name: 'SslCertHostname' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'sslCertHostname', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    sslCertHostname?: Optional<string>;
    @Expose({ name: 'SslCheckCert' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'sslCheckCert', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    sslCheckCert?: Optional<boolean>;
    @Expose({ name: 'SslCiphers' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'sslCiphers', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    sslCiphers?: Optional<string>;
    @Expose({ name: 'SslClientCert' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'sslClientCert', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    sslClientCert?: Optional<string>;
    @Expose({ name: 'SslClientKey' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'sslClientKey', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    sslClientKey?: Optional<string>;
    @Expose({ name: 'SslSniHostname' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'sslSniHostname', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    sslSniHostname?: Optional<string>;
    @Expose({ name: 'UseSsl' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'useSsl', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    useSsl?: Optional<boolean>;
    @Expose({ name: 'Weight' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'weight', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    weight?: Optional<integer>;
    @Expose({ name: 'ServiceId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'serviceId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    serviceId?: Optional<string>;
    @Expose({ name: 'BackendName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'backendName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    backendName?: Optional<string>;
    @Expose({ name: 'VersionId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'versionId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    versionId?: Optional<string>;
    @Expose({ name: 'CreatedAt' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'createdAt', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    createdAt?: Optional<string>;
    @Expose({ name: 'UpdatedAt' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'updatedAt', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    updatedAt?: Optional<string>;
    @Expose({ name: 'DeletedAt' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'deletedAt', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    deletedAt?: Optional<string>;
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
        if (this.name != null) {
            identifier[this.IDENTIFIER_KEY_NAME] = this.name;
        }

        if (this.serviceId != null) {
            identifier[this.IDENTIFIER_KEY_SERVICEID] = this.serviceId;
        }

        if (this.versionId != null) {
            identifier[this.IDENTIFIER_KEY_VERSIONID] = this.versionId;
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

