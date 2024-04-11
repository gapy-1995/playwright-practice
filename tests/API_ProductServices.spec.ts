import { test, expect } from "@playwright/test";
import { BaseService } from "../services/BaseService";
import { ProductService } from "../services/ProductServices";

test("GET product list API", { tag: "@api" }, async ({ request }) => {
  const productService = new ProductService(request);

  const response = await productService.getAllProductList();
  await expect(response.ok()).toBeTruthy();
  const responseBody = await response.json();
  console.log(responseBody);
});


test("POST Search product", {tag:'@api'}, async ({ request }) => {
  const searchProductAPI = new ProductService(request)
    
  const response = await searchProductAPI.searchProduct("tshirt")
  await expect(response.ok()).toBeTruthy();
  const responseBody = await response.json();
  console.log(responseBody);
  
})
