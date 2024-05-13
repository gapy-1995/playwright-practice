import { Page, expect, test, Locator } from "@playwright/test";


export class BasePage {
  private static instances: Map<string, BasePage> = new Map();
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  
  //example usage
  //const homepage = await BasePage.create(HomePage, page)
  static async create<T extends BasePage>(
    pageInstance: { new (page: Page): T },
    page: Page
  ): Promise<T> {
    const pageName = pageInstance.name.toUpperCase();
    if (!this.instances.has(pageName)) {
      const instance = new pageInstance(page);
      this.instances.set(pageName, instance);
    }
    return this.instances.get(pageName) as T;
  }

  async getTitle(title: string) {
    await test.step(`get page title: ${title}`, async () => {
      try {
        await this.page.getByTitle(title);
      } catch (error) {
        console.error(`the title is not display ${title} `, error);
        throw error;
      }
    });
  }

  async waitForSelectorVisible(selector: Locator) {
    try {
      await selector.waitFor({ state: "visible", timeout: 3000 });
    } catch (error) {
      console.error(`The selector ${selector} not visible: `, error);
      throw error;
    }
  }

  async softVerifyElementDisplay(selector: Locator) {
    try {
      await expect(selector.first()).toBeVisible();
    } catch (error) {
      const selectorText = selector.innerText;
      console.error(`Element not display on page ${selectorText}`);
      throw error;
    }
  }

  async enhanceClick(selector: string) {
    test.step(`click to element: ${selector}`, async () => {
      try {
        await this.softVerifyElementDisplay(this.page.locator(selector));
        await this.page.locator(selector).click({ force: true });
      } catch (error) {
        console.error(`Element not ready to click: ${selector}`);
      }
    });
  }

}
