// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Fastly::Services::Healthcheck';

    @Exclude()
    protected readonly IDENTIFIER_KEY_NAME: string = '/properties/Name';
    @Exclude()
    protected readonly IDENTIFIER_KEY_SERVICEID: string = '/properties/ServiceId';
    @Exclude()
    protected readonly IDENTIFIER_KEY_VERSIONID: string = '/properties/VersionId';

    @Expose({ name: 'CheckInterval' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'checkInterval', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    checkInterval?: Optional<integer>;
    @Expose({ name: 'Comment' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'comment', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    comment?: Optional<string>;
    @Expose({ name: 'ExpectedResponse' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'expectedResponse', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    expectedResponse?: Optional<integer>;
    @Expose({ name: 'Host' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'host', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    host?: Optional<string>;
    @Expose({ name: 'HttpVersion' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'httpVersion', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    httpVersion?: Optional<string>;
    @Expose({ name: 'Initial' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'initial', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    initial?: Optional<integer>;
    @Expose({ name: 'Method' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'method', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    method?: Optional<string>;
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
    @Expose({ name: 'Threshold' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'threshold', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    threshold?: Optional<integer>;
    @Expose({ name: 'Timeout' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'timeout', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    timeout?: Optional<integer>;
    @Expose({ name: 'Window' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'window', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    window?: Optional<integer>;
    @Expose({ name: 'ServiceId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'serviceId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    serviceId?: Optional<string>;
    @Expose({ name: 'VersionId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'versionId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    versionId?: Optional<string>;
    @Expose({ name: 'HealthcheckName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'healthcheckName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    healthcheckName?: Optional<string>;
    @Expose({ name: 'Version' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'version', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    version?: Optional<string>;
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

