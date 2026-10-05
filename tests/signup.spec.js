import { test, expect } from "@playwright/test"
import { PageObjectManager } from "../Pages/PageObjectManager"

test("TC001:Fill and Signup", async ({ page }) => {

    const pom = new PageObjectManager(page)
    const homePage = pom.getHomePage()
    await homePage.gotoPage()
    const signupPage = pom.getSignupPage()
    const result = await signupPage.SignUp()
    expect(result.alertMsg).toBe("Sign up successful.")

})

test("TC002:Fill and close", async ({ page }) => {
    const pom = new PageObjectManager(page)
    const homePage = pom.getHomePage()
    await homePage.gotoPage()
    const signupPage = pom.getSignupPage()
    const result = await signupPage.SignUp()
    await signupPage.SignupClose()
})
