// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Fastly::Logging::S3';

    @Exclude()
    protected readonly IDENTIFIER_KEY_SERVICEID: string = '/properties/ServiceId';
    @Exclude()
    protected readonly IDENTIFIER_KEY_VERSION: string = '/properties/Version';
    @Exclude()
    protected readonly IDENTIFIER_KEY_NAME: string = '/properties/Name';

    @Expose({ name: 'AccessKey' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'accessKey', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    accessKey?: Optional<string>;
    @Expose({ name: 'Acl' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'acl', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    acl?: Optional<string>;
    @Expose({ name: 'BucketName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'bucketName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    bucketName?: Optional<string>;
    @Expose({ name: 'CompressionCodec' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'compressionCodec', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    compressionCodec?: Optional<string>;
    @Expose({ name: 'Domain' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'domain', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    domain?: Optional<string>;
    @Expose({ name: 'Format' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'format', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    format?: Optional<string>;
    @Expose({ name: 'FormatVersion' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'formatVersion', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    formatVersion?: Optional<integer>;
    @Expose({ name: 'GzipLevel' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'gzipLevel', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    gzipLevel?: Optional<integer>;
    @Expose({ name: 'IamRole' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'iamRole', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    iamRole?: Optional<string>;
    @Expose({ name: 'MessageType' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'messageType', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    messageType?: Optional<string>;
    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'Path' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'path', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    path?: Optional<string>;
    @Expose({ name: 'Period' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'period', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    period?: Optional<integer>;
    @Expose({ name: 'Placement' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'placement', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    placement?: Optional<string>;
    @Expose({ name: 'PublicKey' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'publicKey', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    publicKey?: Optional<string>;
    @Expose({ name: 'Redundancy' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'redundancy', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    redundancy?: Optional<string>;
    @Expose({ name: 'ResponseCondition' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'responseCondition', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    responseCondition?: Optional<string>;
    @Expose({ name: 'SecretKey' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'secretKey', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    secretKey?: Optional<string>;
    @Expose({ name: 'ServerSideEncryption' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'serverSideEncryption', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    serverSideEncryption?: Optional<string>;
    @Expose({ name: 'ServerSideEncryptionKmsKeyId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'serverSideEncryptionKmsKeyId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    serverSideEncryptionKmsKeyId?: Optional<string>;
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

