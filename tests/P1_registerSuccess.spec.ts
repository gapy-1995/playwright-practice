import { test, expect, type Page } from '@playwright/test';
import { BasePage } from "../page-objects/BasePage";
import { HomePage } from "../page-objects/HomePage";
import { RegisterPage } from "../page-objects/RegisterPage";

test('Verify user can login with valid credentials', async ({ page }) => {
    const homePage = await BasePage.create(HomePage,page);
    // await homePage.navigateToHomePage()
    await page.goto('https://automationexercise.com')
    const loginPage = await homePage.navigateToLoginPage();
    await loginPage.login("lololo@gmail.com", "123456")
});