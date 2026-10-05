import { test, expect } from "@playwright/test"
import { PageObjectManager } from "../Pages/PageObjectManager"
import data from "../Utils/inputData.json"
import { customLocators } from "../fixtures/loginFixture"

customLocators("TC008:Login and select product from Phone category and complete purchase",async({page,loginFunction})=>{
    await loginFunction( 
         data.customer1Details.username,
         data.customer1Details.password
        
    )
    const pom = new PageObjectManager(page)
    const homePage = pom.getHomePage()
    await homePage.selectProductFromCategory(data.customer1Details.category,data.customer1Details.product)
    const productPage=pom.getProductPage()
    const result=await productPage.addProductToCart()
    expect(result.alertMsg).toBe("Product added.")

    await homePage.naviagteToCartPage()
    const cartPage=pom.getCartPage()
    //verify product added
    //await expect(cartPage.cartProduct.first()).toHaveText("Nexus 6")
     expect(cartPage.cartProduct.filter({hasText:data.customer1Details.product})).toBeVisible()
    await cartPage.placeOrder()
    const checkoutpage=pom.getCheckOutPage()
    await checkoutpage.fillCustomerDetails(data.customer1Details)
    await checkoutpage.completePurchase()

    await expect(checkoutpage.thankyouMsg).toContainText("Thank you for your purchase!")

})

customLocators("TC009:Login and select product from Monitor category and complete purchase",async({page,loginFunction})=>{
    await loginFunction( 
         data.customer2Details.username,
         data.customer2Details.password
        
    )
    const pom = new PageObjectManager(page)
    const homePage = pom.getHomePage()
    await homePage.selectProductFromCategory("Monitors",data.customer2Details.product)
    const productPage=pom.getProductPage()
    const result=await productPage.addProductToCart()
    expect(result.alertMsg).toBe("Product added.")

    await homePage.naviagteToCartPage()
    const cartPage=pom.getCartPage()
    //verify product added
    //await expect(cartPage.cartProduct.first()).toHaveText("Apple monitor 24")
     expect(cartPage.cartProduct.filter({hasText:data.customer2Details.product})).toBeVisible()
    await cartPage.placeOrder()
    const checkoutpage=pom.getCheckOutPage()
    await checkoutpage.fillCustomerDetails(data.customer2Details)
    await checkoutpage.completePurchase()

    await expect(checkoutpage.thankyouMsg).toContainText("Thank you for your purchase!")

})
