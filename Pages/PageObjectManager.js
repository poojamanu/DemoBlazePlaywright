import { CartPage } from "./CartPage.js";
import { HomePage } from "./HomePage.js";
import { ProductPage } from "./ProductPage.js"
import { CheckoutPage } from "./CheckoutPage.js";
export class PageObjectManager {
    constructor(page) {
        this.homePage = new HomePage(page)
        this.productPage = new ProductPage(page)
        this.cartPage = new CartPage(page)
        this.checkoutPage = new CheckoutPage(page)

    }

    getHomePage() {
        return this.homePage
    }

    getProductPage() {
        return this.productPage
    }

    getCartPage() {
        return this.cartPage
    }

    getCheckOutPage(){
        return this.checkoutPage
    }

}