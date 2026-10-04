import { Utilities } from "../Utils/Utilties"
export class ProductPage{

    constructor(page){
        this.page = page
         this.utility = new Utilities(this.page)
        this.addToCart= page.locator("//a[@class='btn btn-success btn-lg']")
    }

    async addProductToCart(){
        const alertPromise=this.utility.handleAlertAsPromise()
       await this.addToCart.click()
       const alertMsg=await alertPromise
       return{
        alertMsg
       }
    }
}