import { BasePage } from "./BasePage";
import {Page} from "@playwright/test";
import { LoginPage } from "./LoginPage";
export class HomePage extends BasePage {
    readonly navBarLocator = {
        signUpandLoginBtn: this.page.locator('a[href="/login"]')
    }
    constructor(page:Page) {
        super(page)
    }

    async navigateToHomePage() {
        await this.page.goto("https://automationexercise.com/")
    }
    
    public async navigateToLoginPage() {
        await this.navBarLocator.signUpandLoginBtn.click()
        return await BasePage.create(LoginPage,this.page);
    }
}

