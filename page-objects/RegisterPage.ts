import { log } from "console";
import { BasePage } from "./BasePage";
import {Page, expect} from "@playwright/test";
export class RegisterPage extends BasePage{
    accInfo = {
        optMale: '#id_gender1',
        optFemale: '#id_gender2',
        nameTxtField: 'input[data-qa="name"]',
        pwdTxtField: 'input[data-qa="password"]',
        emailTxtField: 'input[data-qa="email"]',
        DOBDays: 'select[data-qa="days"]',
        DOBMonths: 'select[data-qa="months"]',
        DOBYears: 'select[data-qa="years"]',
        firstNameTxtField: 'input[data-qa="first_name"]',
        lastNameTxtField: 'input[data-qa="last_name"]',
        addressTxtField: 'input[data-qa="address"]',
        optCountry: 'select[data-qa="country"]',
        stateTxtField: 'input[data-qa="state"]',
        cityTxtField: 'input[data-qa="city"]',
        zipCodeTxtField: 'input[data-qa="zipcode"]',
        mobileTxtField: 'input[data-qa="mobile_number"]',
        createAccountBtn: 'button[data-qa="create-account"]'
    }

    accountCreated = {
        continueBtn: 'a[data-qa="continue-button"]',
        accCreatedHeader: 'h2[data-qa="account-created"]',
    }

    constructor(page: Page) {
        super(page)
    }

    public async verifyNameIsNotEmpty(exepectedName: string): Promise<RegisterPage> {
        await this.page.waitForSelector(this.accInfo.nameTxtField, {timeout: 20000})
        const actualName = await this.page.inputValue(this.accInfo.nameTxtField);
        await expect(actualName).toContain(exepectedName)
        return this;
    }

    public async verifyEmailIsNotEmpty(expectedEmail: string): Promise<RegisterPage> {
        const actualEmail = await this.page.inputValue(this.accInfo.emailTxtField)
        await expect(actualEmail).toContain(expectedEmail)
        return this;
    }

    public async inputPassword(passwordValue: string): Promise<RegisterPage> {
        // wait for dom load
        await this.page.waitForSelector(this.accInfo.pwdTxtField, {state: 'visible', timeout: 3000})
        //clear text first 
        await this.page.fill(this.accInfo.pwdTxtField,'', )
        await this.page.fill(this.accInfo.pwdTxtField, `${passwordValue}`) 
        return this
    }

    public async inputFirstName(firstNameValue: string): Promise<RegisterPage> {
        //clear text first 
        await this.page.fill(this.accInfo.firstNameTxtField,'')
        await this.page.fill(this.accInfo.firstNameTxtField, `${firstNameValue}`) 
        return this
    }

    public async inputLastName(lastNameValue: string): Promise<RegisterPage> {
     //clear text first 
        await this.page.fill(this.accInfo.lastNameTxtField,'')
        await this.page.fill(this.accInfo.lastNameTxtField, `${lastNameValue}`) 
        return this
    }

    public async inputAddress(addressvalue: string): Promise<RegisterPage> {
        await this.page.fill(this.accInfo.addressTxtField, '')
        await this.page.fill(this.accInfo.addressTxtField, addressvalue)
        return this
    }

    public async inputState(stateValue: string): Promise<RegisterPage> {
        await this.page.fill(this.accInfo.stateTxtField, '')
        await this.page.fill(this.accInfo.stateTxtField, stateValue)
        return this
    }

    public async inputCity(cityValue: string): Promise<RegisterPage> {
        await this.page.fill(this.accInfo.cityTxtField, '')
        await this.page.fill(this.accInfo.cityTxtField, cityValue)
        return this
    }

    public async inputZipCode(zipCodeValue: string): Promise<RegisterPage> {
        await this.page.fill(this.accInfo.zipCodeTxtField, zipCodeValue)
        return this
    }

    public async clickCreateAccount(): Promise<RegisterPage> {
        await this.page.locator(this.accInfo.createAccountBtn).click()
        return this;
    }

    public async inputPhoneNumber(phoneNumberValue: string): Promise<RegisterPage> {
        await this.page.fill(this.accInfo.mobileTxtField, phoneNumberValue);
        return this;
    }

    public async verifyCreateAccountSucces(): Promise<RegisterPage> {
        await this.page.waitForSelector('a[data-qa="continue-button"]', { state: 'visible' , timeout: 10000 });
        const currentUrl = await this.page.url();
        await expect(currentUrl.includes('/account_created')).toBeTruthy();
        await expect(this.page.locator(this.accountCreated.accCreatedHeader)).toHaveText('Account Created!');
        await expect(this.page.locator(this.accountCreated.continueBtn)).toBeVisible()
        return this;
    }
}