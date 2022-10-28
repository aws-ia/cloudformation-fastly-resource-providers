// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Fastly::Dictionary::DictionaryItem';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ITEMKEY: string = '/properties/ItemKey';
    @Exclude()
    protected readonly IDENTIFIER_KEY_SERVICEID: string = '/properties/ServiceId';
    @Exclude()
    protected readonly IDENTIFIER_KEY_DICTIONARYID: string = '/properties/DictionaryId';

    @Expose({ name: 'ItemKey' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'itemKey', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    itemKey?: Optional<string>;
    @Expose({ name: 'ItemValue' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'itemValue', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    itemValue?: Optional<string>;
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
    @Expose({ name: 'DictionaryId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'dictionaryId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    dictionaryId?: Optional<string>;
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

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.itemKey != null) {
            identifier[this.IDENTIFIER_KEY_ITEMKEY] = this.itemKey;
        }

        if (this.serviceId != null) {
            identifier[this.IDENTIFIER_KEY_SERVICEID] = this.serviceId;
        }

        if (this.dictionaryId != null) {
            identifier[this.IDENTIFIER_KEY_DICTIONARYID] = this.dictionaryId;
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

