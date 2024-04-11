import { BasePage } from "./BasePage";
import {Page} from "@playwright/test";
import { LoginPage } from "./LoginPage";
export class HomePage extends BasePage {
    readonly navBarLocator = {
        signUpandLoginBtn: 'a[href="/login"]'
    }
    constructor(page:Page) {
        super(page)
    }

    async navigateToHomePage() {
        await this.page.goto("https://automationexercise.com/")
    }
    
    async navigateToLoginPage() {
        await this.page.locator(this.navBarLocator.signUpandLoginBtn).click()
        return await BasePage.create(LoginPage,this.page);
    }
}

