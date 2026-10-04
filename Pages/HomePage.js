import { Utilities } from "../Utils/Utilties"
import data from "../Utils/inputData.json"
export class HomePage {
    constructor(page) {
        this.page = page
        this.utility = new Utilities(this.page)
        this.signUp = page.locator("#signin2")
        this.login = page.locator("#login2")
        this.home = page.getByRole("link", { name: 'Home' })
        this.cart = page.locator("#cartur")
        this.logoutButton=page.locator("#logout2")

        /* --signup locators -- */

        this.username = page.locator("#sign-username")
        this.password = page.locator("#sign-password")
        this.signupButton = page.getByRole("button", { name: "Sign up" })
        this.signupCloseButton = page.locator("//div[@id='signInModal']//button[@class='btn btn-secondary']")

        /* --login locators -- */

        this.loginUsername = page.locator("#loginusername")
        this.loginPassword = page.locator("#loginpassword")
        this.loginButton = page.getByRole("button", { name: "Log in" })
        this.welcomeUser = page.locator("#nameofuser")

        /*--product locator --*/
        this.product = page.getByRole("link", { name: "Samsung galaxy s6" })
        this.productCategory = page.locator("//div[@class='col-lg-3']//a")
        this.allProducts = page.locator("#tbodyid .card-title a")

    }

    async gotoPage() {
        await this.page.goto("/")
    }

    async SignUp() {
        const username = this.utility.generateUniqueUsername()
        await this.signUp.click()
        await this.username.fill(username)
        await this.password.fill(data.validLogin.password)
        const alertPromise = this.utility.handleAlertAsPromise()
        await this.signupButton.click()
        const alertMsg = await alertPromise
        return {
            username,
            alertMsg
        }

    }
    async SignupClose() {
        await this.signUp.click()
        await this.username.fill(data.validLogin.username)
        await this.password.fill(data.validLogin.password)
        await this.signupCloseButton.click()
    }

    /*  
    given as fixture
          async LoginWithValidCredenials() {
          await this.login.click()
          await this.loginUsername.fill(data.validLogin.username)
          await this.loginPassword.fill(data.validLogin.password)
          await this.loginButton.click()
  
      }*/

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

    async chooseProduct() {
        await this.product.click()

    }

    async selectProductFromCategory(category, myProduct) {

        const categoryCount = await this.productCategory.count()

        for (let i = 0; i < categoryCount; i++) {
            const categoryItem = await this.productCategory.nth(i).textContent()
            console.log(categoryItem)
            if (categoryItem.trim() === category) {
                await this.productCategory.nth(i).click()
                break
            }
        }
        await this.page
        .locator("#tbodyid .card-title a")
        .filter({ hasText: myProduct })
        .waitFor({ state: "visible" })

        const productCount = await this.allProducts.count()
        console.log(productCount)
        for (let i = 0; i < productCount; i++) {
            const product = await this.allProducts.nth(i).textContent()
            console.log(product)
            if (product.trim() === myProduct) {
                await this.allProducts.nth(i).click()
                break
            }
        }

    }


    async naviagteToCartPage(){
        await this.cart.click()

    }

    async logout(){
        await this.logoutButton.click()
    }

}