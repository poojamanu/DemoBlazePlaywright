export class CartPage {
    constructor(page) {
        this.page = page

        //** cart pagelocators */
        this.cartProduct = page.locator("#tbodyid tr td:nth-child(2)")
        this.placeOrderButton = page.getByRole("button", { name: "Place Order" })

    }

    async placeOrder() {
        await this.placeOrderButton.click()
    }



}