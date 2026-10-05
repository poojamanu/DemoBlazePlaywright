import { test, expect } from "@playwright/test"
import { PageObjectManager } from "../Pages/PageObjectManager"
import data from "../Utils/inputData.json"
import { Utilities } from "../Utils/Utilties"
import { customLocators } from "../fixtures/loginFixture"


customLocators("TC003:Login with valid credentials",async({loginFunction,commonLocators})=>{
   await loginFunction(
    data.validLogin.username,
    data.validLogin.password
   )
     await expect(commonLocators.welcomeUser).toContainText("Welcome")
})



test("TC004:Login with invalid Password", async ({ page }) => {
    const pom = new PageObjectManager(page)
    const homePage = pom.getHomePage()
    await homePage.gotoPage()
    const loginPage=pom.getLoginPage()
    
    const result = await loginPage.LoginWithInValidPassword()
    expect(result.alertMsg).toBe("Wrong password.")
})

test("TC005:Login with invalid Username ", async ({ page }) => {
    const pom = new PageObjectManager(page)
    const homePage = pom.getHomePage()
    await homePage.gotoPage()
     const loginPage=pom.getLoginPage()
    
    const result = await loginPage.LoginWithInvalidUsername()
    expect(result.alertMsg).toBe("User does not exist.")
})

test("TC006:Login with invalid Username and invalid password", async ({ page }) => {
    const pom = new PageObjectManager(page)
    const homePage = pom.getHomePage()
    await homePage.gotoPage()
     const loginPage=pom.getLoginPage()
    const result = await loginPage.LoginWithInvalidUsernameAndPassword()
    expect(result.alertMsg).toBe("User does not exist.")
})




customLocators("TC10:Login with valid credentials and logout",async({page,loginFunction})=>{
    await loginFunction( 
         data.validLogin.username,
         data.validLogin.password
        
    )
    const pom = new PageObjectManager(page)
    const homePage = pom.getHomePage()
     const loginPage=pom.getLoginPage()
    await loginPage.logout()
})



