
export class CheckoutPage{
    constructor(page){
        this.page=page

        /* customer details locators */

        this.name = page.locator("#name")
        this.country = page.locator("#country")
        this.city = page.locator("#city")
        this.card = page.locator("#card")
        this.month = page.locator("#month")
        this.year = page.locator("#year")
        this.purchaseButton=page.getByRole("button",{name:"Purchase"})

        this.thankyouMsg=page.getByText("Thank you for your purchase!")
    }

     async fillCustomerDetails(customerDetails){
        await this.name.fill(customerDetails.name)
        await this.country.fill(customerDetails.country)
        await this.city.fill(customerDetails.city)
        await this.card.fill(customerDetails.card)
        await this.month.fill(customerDetails.month)
        await this.year.fill(customerDetails.year)
    }

    async completePurchase(){
        await this.purchaseButton.click()
    }
}