export type ApiError = {
    msg: string
    detail: string
}

export type FastlyError = {
    status: number
    statusText?: string
    body?: ApiError
    response?: any
    error?: Error
}

export const fastlyNotFoundError: FastlyError = {
    status: 404,
    error: new Error('Fastly API returned the requested resource but it is marked as "deleted"')
}

export type ResponseWithHttpInfo = {
    data: any,
    response: {
        status: number
        text: string
        body: any
    }
}