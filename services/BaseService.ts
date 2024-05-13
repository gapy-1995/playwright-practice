import {  APIRequestContext, APIResponse } from '@playwright/test';
import { URL } from 'url';

type BodyType = Record<string, string> | FormData   
type ContentType = 'application/json' | 'multipart/form-data' | 'application/xml'
type Method = 'get' | 'post' | 'delete' | 'put'
export class BaseService {
    private url: URL;
    private searchParams: URLSearchParams = new URLSearchParams();
    private header: Record<string, string> = {};
    private bodyPayload: BodyType | null = null;
    private method: Method = 'get'; 
    async withUrl(endpoint) {
        this.url = new URL(endpoint);
    }

    async addQueryParam(key: string, value: string): Promise<BaseService> {
        this.searchParams.append(key,value)
        return this;
    }
    
    private async addHeader(key: string, value:string) {
        this.header[key] = value;
        return this;
    }

    async withContentType(contentType: ContentType = 'application/json'): Promise<BaseService> {
        this.addHeader('Content-type', contentType)
        return this
    }

    async addBearerToken(token: string ): Promise<BaseService> {
        this.addHeader('Authorization', token)
        return this;
    }

    async withMethod(method = 'get'): Promise<BaseService> {
        await this 
        return this;
    }
    
    public addBodyPayload(body: BodyType): Record<string,string> {
        if(typeof body === "object")
    }

    private handleJsonObject() {
        let bodyPayload: Record<string, string> = {};
    }
}