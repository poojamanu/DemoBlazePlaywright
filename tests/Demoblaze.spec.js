import { test } from "@playwright/test"
import { PageObjectManager } from "../Pages/PageObjectManager"

import { Utilities } from "../Utils/Utilties"



test("TC001:Fill and Signup", async ({ page }) => {

    const pom = new PageObjectManager(page)
    const homePage = pom.getHomePage()
    await homePage.gotoPage()
    
    await homePage.SignUp()

})

test("TC002:Fill and close", async ({ page }) => {
    const pom = new PageObjectManager(page)
    const homePage = pom.getHomePage()
    await homePage.gotoPage()
    await homePage.SignupClose()
})

test("TC003:Login with valid credentials",async({page})=>{
    const pom=new PageObjectManager(page)
    const homePage = pom.getHomePage()
    await homePage.gotoPage()
    await homePage.LoginWithValidCredenials()
    
})

test("TC004:Login with invalid credentials",async({page})=>{
    const pom=new PageObjectManager(page)
    const homePage = pom.getHomePage()
    await homePage.gotoPage()
    await homePage.LoginWithInValidCredenials()
})