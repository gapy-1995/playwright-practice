import { test, expect, type Page } from "@playwright/test";
import { BasePage } from "../page-objects/BasePage";
import { HomePage } from "../page-objects/HomePage";
import { LoginPage } from "../page-objects/LoginPage";
import { chromium } from "@playwright/test";
import { CommonUtils } from "../utils/CommonUtils";
test.describe("Verify register feature for new user", async () => {
  let uniqueFirstName: string
  let uniqueLastName: string
  let uniqueAddress: string
  let email: string
  let userName: string
  let uniqueMobileNumber: string
  let uniqueZipCode: string 
  let state: string
  let city: string
  let pwd: string
  test.beforeAll(async () => { 
     uniqueFirstName = CommonUtils.uniqueName("QE_");
     uniqueLastName = CommonUtils.uniqueName("LN_")
     state = "90000"
     city = "Temptation City"
     uniqueAddress = CommonUtils.uniqueAdress()
     uniqueZipCode = CommonUtils.uniqueZipCode()
     uniqueMobileNumber = CommonUtils.uniquePhoneNumber()
     pwd = CommonUtils.generatePassword(6)
     userName = CommonUtils.uniqueName("UN");
     email = CommonUtils.uniqueEmail(5);
  });
  test.beforeEach('Open home page', async ({page}) => {
    await page.goto("https://automationexercise.com")
  })

  test("Verify user can register with valid credentials", {tag: ['@smoke'],}, async ({ page }) => {
    const homePage = await BasePage.create(HomePage, page);
    await homePage.navigateToHomePage();
    const loginPage = await homePage.navigateToLoginPage();
    const registerPage = await loginPage.signUpNewUser(
      userName,
      email
    );

    await registerPage
      .verifyNameIsNotEmpty(userName)
      .then(() => registerPage.verifyEmailIsNotEmpty(email));

    await registerPage
          .inputPassword(pwd)
    await registerPage
          .inputFirstName(uniqueFirstName)
    await registerPage
          .inputLastName(uniqueLastName)
    await registerPage
          .inputAddress(uniqueAddress)
    await registerPage
          .inputState(state)
    await registerPage
          .inputCity(city)
    await registerPage
          .inputZipCode(uniqueZipCode)
    await registerPage
          .inputPhoneNumber(uniqueMobileNumber)
    await registerPage
          .clickCreateAccount()
    
    await registerPage
          .verifyCreateAccountSucces()
  });

});
