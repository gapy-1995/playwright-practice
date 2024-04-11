import { test, expect, BrowserContext } from "@playwright/test";
import { BasePage } from "../page-objects/BasePage";
import { HomePage } from "../page-objects/HomePage";
import { LoginPage } from "../page-objects/LoginPage";
import { CommonUtils } from "../utils/CommonUtils";

let context: BrowserContext | null = null;
let uniqueFirstName: string;
let uniqueLastName: string;
let uniqueAddress: string;
let email: string;
let userName: string;
let uniqueMobileNumber: string;
let uniqueZipCode: string;
let state: string;
let city: string;
let pwd: string;

test.describe.configure({ mode: "parallel" });

test.describe("e2e test", () => {
  test.beforeAll(async () => {
    uniqueFirstName = CommonUtils.uniqueName("QE_");
    uniqueLastName = CommonUtils.uniqueName("LN_");
    uniqueAddress = CommonUtils.uniqueAdress();
    email = CommonUtils.uniqueEmail(5);
    userName = CommonUtils.uniqueName("UN_");
    uniqueMobileNumber = CommonUtils.uniquePhoneNumber();
    uniqueZipCode = CommonUtils.uniqueZipCode();
    state = "SomeState";
    city = "SomeCity";
    pwd = CommonUtils.generatePassword(6);
  });

  test.beforeEach(async ({ browser }) => {
    context = await browser.newContext();
  });

  test.afterEach(async () => {
    if (context) {
      await context.close();
      context = null; // Ensure context is reset after each test
    }
  });

  test("Verify user can register with valid credentials", async ({ page }) => {
    // Using the page object pattern
    const homePage = new HomePage(page);
    await homePage.navigateToHomePage();
    const loginPage = await homePage.navigateToLoginPage();
    const registerPage = await loginPage.signUpNewUser(userName, email);

    await registerPage.verifyNameIsNotEmpty(userName);
    await registerPage.verifyEmailIsNotEmpty(email);
    await registerPage.inputPassword(pwd);
    await registerPage.inputFirstName(uniqueFirstName);
    await registerPage.inputLastName(uniqueLastName);
    await registerPage.inputAddress(uniqueAddress);
    await registerPage.inputState(state);
    await registerPage.inputCity(city);
    await registerPage.inputZipCode(uniqueZipCode);
    await registerPage.inputPhoneNumber(uniqueMobileNumber);
    await registerPage.clickCreateAccount();
    await registerPage.verifyCreateAccountSucces();
  });

  test("Verify login with new credentials", async ({ page }) => {
    let validUserName = "automationtester";
    let email = "automationtester@gmail.com";
    let password = "abc123!@#";
    const homePage = new HomePage(page);
    await homePage.navigateToHomePage();
    const loginPage = await homePage.navigateToLoginPage();
    await loginPage.login(email, password);
    await loginPage.verifyLoginSuccess(validUserName);
  });
});
