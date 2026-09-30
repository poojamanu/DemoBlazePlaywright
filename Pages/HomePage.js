import { Utilities } from "../Utils/Utilties"
import { expect } from "@playwright/test"
import data from "../Utils/inputData.json"
export class HomePage{
    constructor(page){
        this.page=page
        this.signUp=page.locator("#signin2")
        this.login=page.locator("#login2")
        this.home=page.getByRole("link",{name:'Home'})

        /* --signup locators -- */

        this.username=page.locator("#sign-username")
        this.password=page.locator("#sign-password")
        this.signupButton=page.getByRole("button",{name:"Sign up"})
        this.signupCloseButton=page.locator("//div[@id='signInModal']//button[@class='btn btn-secondary']")

         /* --login locators -- */

         this.loginUsername=page.locator("#loginusername")
         this.loginPassword=page.locator("#loginpassword")
         this.loginButton=page.getByRole("button",{name:"Log in"})
         this.welcomeUser=page.locator("#nameofuser")

    }

    async gotoPage(){
        await this.page.goto("/")
    }
  
    async SignUp(){
        const utility=new Utilities(this.page)
        const username=utility.generateUniqueUsername()
        await this.signUp.click()
        await this.username.fill(username)
        await this.password.fill(data.validLogin.password)
        utility.handleAlertAndVerifyText("Sign up successful.")
        await this.signupButton.click()
       
    } 
    async SignupClose(){
        await this.signUp.click()
        await this.username.fill(data.validLogin.username)
        await this.password.fill(data.validLogin.password)
        await this.signupCloseButton.click()
    }

    async LoginWithValidCredenials(){
        await this.login.click()
        await this.loginUsername.fill(data.validLogin.username)
        await this.loginPassword.fill(data.validLogin.password)
        await this.loginButton.click()
        await expect(this.welcomeUser).toContainText("Welcome")
    }

    async LoginWithInValidCredenials(){
        const utility=new Utilities(this.page)
        await this.login.click()
        await this.loginUsername.fill(data.invalidLogin.username)
        await this.loginPassword.fill(data.invalidLogin.password)
        
        utility.handleAlertAndVerifyText("Wrong password.")
        await this.loginButton.click()



    }

    

}