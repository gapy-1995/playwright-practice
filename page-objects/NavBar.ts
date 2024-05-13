import { BasePage } from "./BasePage";
import { Page, expect } from "@playwright/test";



class NavBar extends BasePage implements INavBar {
  navProductsLink: string = "Products";

  constructor(page: Page) {
    super(page);
  }

  public async navigateToProduct(productName: string) {
    await this.page.getByTitle(`${this.navProductsLink}`).click();
    let singleProduct = await this.page.getByTitle(`${productName}`);
    await singleProduct.click();
  }

  public async verifyCorrectUrl(productUrl) {
    let currentUrl = this.page.url();
    currentUrl = currentUrl.toLowerCase();
    expect(currentUrl).toContain(`${productUrl}`);
  }
  public async abc() {

  }
}


interface navBarInfo {
  subMenu: {
    subName: string;
    endpoint: string;
  }[];
}
