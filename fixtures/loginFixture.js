
import { test } from "@playwright/test"

export const customLocators = test.extend({
    commonLocators: async ({ page }, use) => {
        const locators = {
            login: page.locator("#login2"),
            home: page.getByRole("link", { name: 'Home' }),
            loginUsername: page.locator("#loginusername"),
            loginPassword: page.locator("#loginpassword"),
            welcomeUser : page.locator("#nameofuser"),
            loginButton: page.getByRole("button", { name: "Log in" })
        }
        await use(locators)

    },

    loginFunction: async ({ page,commonLocators }, use) => {
        const login = async (uname, pwd) => {
            await page.goto("/")
            await commonLocators.login.click()
            await commonLocators.loginUsername.fill(uname)
            await commonLocators.loginPassword.fill(pwd)
            await commonLocators.loginButton.click()
        }
        await use(login)
    }


})