import { Utilities } from "../Utils/Utilties"
import data from "../Utils/inputData.json"
export class HomePage {
    constructor(page) {
        this.page = page
        this.utility = new Utilities(this.page)      
    
        this.home = page.getByRole("link", { name: 'Home' })
        this.cart = page.locator("#cartur")
        

        /*--product locator --*/
        this.product = page.getByRole("link", { name: "Samsung galaxy s6" })
        this.productCategory = page.locator("//div[@class='col-lg-3']//a")
        this.allProducts = page.locator("#tbodyid .card-title a")

    }

    async gotoPage() {
        await this.page.goto("/")
    }

   

    /*  
    given as fixture
          async LoginWithValidCredenials() {
          await this.login.click()
          await this.loginUsername.fill(data.validLogin.username)
          await this.loginPassword.fill(data.validLogin.password)
          await this.loginButton.click()
  
      }*/

    
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

   

}