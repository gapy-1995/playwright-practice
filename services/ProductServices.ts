import {APIRequestContext} from "@playwright/test";
import {BaseService} from "./BaseService";


export class ProductService extends BaseService {
    private productListAPI: string = "/productsList"
    private brandListAPI: string = "/brandsList"
    private searchProductAPI: string = "/searchProduct"
    constructor(request:APIRequestContext) {
        super(request)
    }

    async getAllProductList() {
        return await this.sendGetRequest(this.productListAPI)
    }

    async getAllBrandList() {
        return await this.sendGetRequest(this.brandListAPI)
    }

    async searchProduct(productName: string) {
        const params = {
            'search_product': productName
        }
        return await this.sendPostRequestForFormData(this.searchProductAPI, params)
    }
}

