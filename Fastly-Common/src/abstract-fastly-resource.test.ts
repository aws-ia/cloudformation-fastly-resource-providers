import {AbstractFastlyResource} from "./abstract-fastly-resource";
import {BaseModel, ResourceHandlerRequest} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {
    AccessDenied,
    InternalFailure,
    InvalidCredentials,
    InvalidRequest,
    NotFound,
    ResourceConflict,
    ServiceInternalError,
    ServiceLimitExceeded
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib/dist/exceptions";
import {FastlyError} from "./types";

class TestAbstractFastlyResource extends AbstractFastlyResource<BaseModel, {}, {}, {}, {}> {
    isDeleted(model: BaseModel | undefined): boolean {
        return false;
    }

    create(model: BaseModel): Promise<{}> {
        return Promise.resolve({});
    }

    delete(model: BaseModel): Promise<void> {
        return Promise.resolve(undefined);
    }

    get(model: BaseModel): Promise<{}> {
        return Promise.resolve({});
    }

    list(model: BaseModel): Promise<BaseModel[]> {
        return Promise.resolve([]);
    }

    newModel(partial: any): BaseModel {
        return undefined;
    }

    setModelFrom(model: BaseModel, from: {} | undefined): BaseModel {
        return undefined;
    }

    update(model: BaseModel): Promise<{}> {
        return Promise.resolve({});
    }
}

describe('AbstractBigIdResource', () => {
    describe('processRequestException', () => {
        let testInstance: TestAbstractFastlyResource;

        beforeAll(() => {
            testInstance = new TestAbstractFastlyResource('foo', BaseModel, BaseModel);
        });

        it.each([
            [InvalidRequest, '400'],
            [InvalidCredentials, '401'],
            [AccessDenied, '403'],
            [NotFound, '404'],
            [ResourceConflict, '409'],
            [ServiceLimitExceeded, '429'],
            [InternalFailure, '500'],
            [InternalFailure, null],
            [InternalFailure, undefined]
        ])('throws a %p if the request has a HTTP %s status code', (errorType, statusCode) => {
            const error = 'Forced error';
            let axiosError: FastlyError = {
                status: parseInt(statusCode),
                error: new Error(error),
                statusText: '',
                body: {
                    msg: '',
                    detail: ''
                }
            };

            try {
                testInstance.processRequestException(axiosError, {logicalResourceIdentifier: 'foo'} as ResourceHandlerRequest<BaseModel>);
                fail('This should have thrown');
            } catch (e) {
                expect(e).toBeInstanceOf(errorType);
                if (e instanceof NotFound) {
                    expect(e.message).not.toContain(error);
                } else {
                    expect(e.message).toContain(error);
                }
            }
        });

        it.skip('returns the message and details from the API, if any', () => {
            const error = 'Forced error';
            let body = {
                msg: 'API error',
                detail: 'API detail'
            };
            let axiosError: FastlyError = {
                status: 500,
                error: new Error(error),
                statusText: '',
                body: body
            };

            try {
                testInstance.processRequestException(axiosError, {logicalResourceIdentifier: 'foo'} as ResourceHandlerRequest<BaseModel>);
                fail('This should have thrown');
            } catch (e) {
                expect(e.message).toContain(error);
                expect(e.message).toContain(body.msg);
                expect(e.message).toContain(body.detail);
            }
        });
    });
});
