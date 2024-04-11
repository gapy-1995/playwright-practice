import { APIRequestContext } from "@playwright/test";
import { BaseService } from "./BaseService";


export class ProductService extends BaseService {
    private productListAPI: string = "/productsList"
    private brandListAPI: string = "/brandsList"
    private searchProductAPI: string = "/searchProduct"
    constructor(request:APIRequestContext) {
        super(request)
    }

    async getAllProductList() {
        const response = await this.sendGetRequest(this.productListAPI)
        return response
    }

    async getAllBrandList() {
        const response = await this.sendGetRequest(this.brandListAPI)
        return response
    }

    async searchProduct(productName: string) {
        const params = {
            'search_product': productName
        }
        const response = await this.sendPostRequestForFormData(this.searchProductAPI, params)
        return response
    }
}