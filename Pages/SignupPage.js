import { Utilities } from "../Utils/Utilties"
import data from "../Utils/inputData.json"
export class SignUpPage{
     constructor(page) {
            this.page = page
            this.utility = new Utilities(this.page)
             this.signUp = page.locator("#signin2")
            this.home = page.getByRole("link", { name: 'Home' })          
          
    
            /* --signup locators -- */
    
            this.username = page.locator("#sign-username")
            this.password = page.locator("#sign-password")
            this.signupButton = page.getByRole("button", { name: "Sign up" })
            this.signupCloseButton = page.locator("//div[@id='signInModal']//button[@class='btn btn-secondary']")
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
}