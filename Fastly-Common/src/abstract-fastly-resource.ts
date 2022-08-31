import {
    BaseModel,
    exceptions,
    ResourceHandlerRequest
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {AbstractBaseResource} from "./abstract-base-resource";
import {FastlyError} from "./types";

export abstract class AbstractFastlyResource<ResourceModelType extends BaseModel, GetResponseData, CreateResponseData, UpdateResponseData, TypeConfigurationM> extends AbstractBaseResource<ResourceModelType, GetResponseData, CreateResponseData, UpdateResponseData, FastlyError, TypeConfigurationM> {

    processRequestException(e: FastlyError, request: ResourceHandlerRequest<ResourceModelType>) {
        const errors = [e.error?.message];
        if (e.body) {
            errors.push(`[${e.body.msg}] ${e.body.detail}`);
        }
        const errorMessage = errors.join('\n');

        switch (e.status) {
            case 400:
                throw new exceptions.InvalidRequest(errorMessage);
            case 401:
                throw new exceptions.InvalidCredentials(errorMessage);
            case 403:
                throw new exceptions.AccessDenied(`Access denied, please check your API token: ${errorMessage}`);
            case 404:
                throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
            case 409:
                throw new exceptions.ResourceConflict(errorMessage);
            case 429:
                throw new exceptions.ServiceLimitExceeded(errorMessage);
            default:
                throw new exceptions.InternalFailure(`Unexpected error occurred, see serialized exception below:\n${JSON.stringify(e)}`);
        }
    }

}