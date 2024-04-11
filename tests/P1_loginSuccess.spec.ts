import { test, expect, type Page } from "@playwright/test";
import { BasePage } from "../page-objects/BasePage";
import { HomePage } from "../page-objects/HomePage";
import { LoginPage } from "../page-objects/LoginPage";
import { chromium } from "@playwright/test";
import { CommonUtils } from "../utils/CommonUtils";
test.describe("Verify register feature for new user", async () => {

  test.beforeEach('Open home page', async ({page}) => {
    await page.goto("https://automationexercise.com")
  })

  test('Verify login with new credentials', async ({ page }) => {
      let validUserName = "automationtester"
      let email = "automationtester@gmail.com"
      let password = "abc123!@#"
      const homePage = new HomePage(page);
      const loginPage = await homePage.navigateToLoginPage();
      await loginPage.login(email, password);
      await loginPage.verifyLoginSuccess(validUserName);    
  });
});
