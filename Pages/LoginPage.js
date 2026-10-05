import { Utilities } from "../Utils/Utilties"
import data from "../Utils/inputData.json"
export class LoginPage {
    constructor(page) {
        this.page = page
        this.utility = new Utilities(this.page)

        /* --login locators -- */
        this.login = page.locator("#login2")
        this.loginUsername = page.locator("#loginusername")
        this.loginPassword = page.locator("#loginpassword")
        this.loginButton = page.getByRole("button", { name: "Log in" })
        this.welcomeUser = page.locator("#nameofuser")
        this.logoutButton = page.locator("#logout2")
    }
    async LoginWithInValidPassword() {

        await this.login.click()
        await this.loginUsername.fill(data.invalidPwd.username)
        await this.loginPassword.fill(data.invalidPwd.password)
        const alertPromise = this.utility.handleAlertAsPromise()
        await this.loginButton.click()
        const alertMsg = await alertPromise
        return {
            alertMsg
        }

    }

    async LoginWithInvalidUsername() {
        await this.login.click()
        await this.loginUsername.fill(data.invalidUname.username)
        await this.loginPassword.fill(data.invalidUname.password)
        //utility.handleAlertAndVerifyText("User does not exist.")
        const alertPromise = this.utility.handleAlertAsPromise()
        await this.loginButton.click()
        const alertMsg = await alertPromise
        return {
            alertMsg
        }
    }

    async LoginWithInvalidUsernameAndPassword() {
        await this.login.click()
        await this.loginUsername.fill(data.invalidUnamePwd.username)
        await this.loginPassword.fill(data.invalidUnamePwd.password)
        const alertPromise = this.utility.handleAlertAsPromise()
        await this.loginButton.click()
        const alertMsg = await alertPromise
        return {
            alertMsg
        }
    }
    async logout() {
        await this.logoutButton.click()
    }
}