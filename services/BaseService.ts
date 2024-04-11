import { test, expect, Request, APIRequestContext } from '@playwright/test';
type QueryParams = Record<string, string | number | boolean>;
export class BaseService {

    baseUrl:string  = "https://automationexercise.com/api";
    headers: Record<string, string> = {};
    request: APIRequestContext;
    bodyPayload: string | FormData;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async sendGetRequest(endpoint: string) {
        const response =  await this.request.get(`${this.baseUrl}${endpoint}`, {headers: this.headers})
        return response
    }

    async sendPostRequest(endpoint: string) {
        const dataToSend = this.bodyPayload ? { data: this.bodyPayload}: {}
        const response = await this.request.post(`${this.baseUrl}${endpoint}`, {
            headers: this.headers,
            ...dataToSend
        })
        return response;
    }

    async sendPostRequestForFormData(endpoint: string, formData) {
        const response = await this.request.post(`${this.baseUrl}${endpoint}`, {
          form: formData
        });
        return response;
    }
    async sendPutRequest() {

    }

    async deleteRequest() {

    }

    async setBodyPayload(requestParam: Record<string, string>) {
        this.bodyPayload = await JSON.stringify(requestParam);
    }


    async setHeaderParam(key: string, value: string) {
        this.headers[key] = value;
    }

    async setQueryParams(params: QueryParams) {
        // provides a convenient way to construct a query string.
        const searchParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
            searchParams.append(key, value.toString())
        });
        return searchParams.toString();
    }
}