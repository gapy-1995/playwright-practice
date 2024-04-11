import { BasePage } from "./BasePage";
import {Page, expect} from "@playwright/test";
import { HomePage } from "./HomePage";
import { RegisterPage } from "./RegisterPage";


export class LoginPage extends BasePage {
    
    readonly loginComponent = {
        userNameTxtField:  'input[data-qa="login-email"]',
        passwordTxtField: 'input[data-qa="login-password"]',
        loginBtn: 'button[data-qa="login-button"]'
    }

    readonly signUpComponent = {
        nameTxtField: 'input[data-qa="signup-name"]',
        emailTxtField: 'input[data-qa="signup-email"]',
        signUpBtn: 'button[data-qa="signup-button"]'
    }
    constructor(page: Page) {
        super(page)
    }

    async login(email: string, password: string) {
        await this.page.waitForSelector(this.loginComponent.userNameTxtField, { state: 'visible', timeout: 6000 });
        //clear text then input
        await this.page.fill(this.loginComponent.userNameTxtField, '',{timeout:500})
        await this.page.fill(this.loginComponent.userNameTxtField, `${email}`,{timeout:500})
        await this.page.fill(this.loginComponent.passwordTxtField, `${password}`,{timeout:500})
        await this.page.locator(this.loginComponent.loginBtn).click()
    }

    async signUpNewUser(name: string, email: string){
        await this.page.fill(this.signUpComponent.nameTxtField, `${name}`)
        await this.page.fill(this.signUpComponent.emailTxtField, `${email}`)
        await this.page.locator(this.signUpComponent.signUpBtn).click()
        return await BasePage.create(RegisterPage, this.page);
    }

    async verifyLoginSuccess(name: string) {
        await expect(this.page.getByText(`Logged in as ${name}`)).toBeVisible()
    }
}