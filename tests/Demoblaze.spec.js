import { test, expect } from "@playwright/test"
import { PageObjectManager } from "../Pages/PageObjectManager"
import data from "../Utils/inputData.json"
import { Utilities } from "../Utils/Utilties"
import { customLocators } from "../fixtures/loginFixture"



test("TC001:Fill and Signup", async ({ page }) => {

    const pom = new PageObjectManager(page)
    const homePage = pom.getHomePage()
    await homePage.gotoPage()
    const result = await homePage.SignUp()
    expect(result.alertMsg).toBe("Sign up successful.")

})

test("TC002:Fill and close", async ({ page }) => {
    const pom = new PageObjectManager(page)
    const homePage = pom.getHomePage()
    await homePage.gotoPage()
    await homePage.SignupClose()
})

customLocators("TC003:Login with valid credentials",async({loginFunction,commonLocators})=>{
   await loginFunction(
    data.validLogin.username,
    data.validLogin.password
   )
     await expect(commonLocators.welcomeUser).toContainText("Welcome")
})
/*test("TC003:Login with valid credentials", async ({ page }) => {
    const pom = new PageObjectManager(page)
    const homePage = pom.getHomePage()
    await homePage.gotoPage()
    await homePage.LoginWithValidCredenials()
    await expect(homePage.welcomeUser).toContainText("Welcome")
})*/


test("TC004:Login with invalid Password", async ({ page }) => {
    const pom = new PageObjectManager(page)
    const homePage = pom.getHomePage()
    await homePage.gotoPage()
    const result = await homePage.LoginWithInValidPassword()
    expect(result.alertMsg).toBe("Wrong password.")
})

test("TC005:Login with invalid Username ", async ({ page }) => {
    const pom = new PageObjectManager(page)
    const homePage = pom.getHomePage()
    await homePage.gotoPage()
    const result = await homePage.LoginWithInvalidUsername()
    expect(result.alertMsg).toBe("User does not exist.")
})

test("TC006:Login with invalid Username and invalid password", async ({ page }) => {
    const pom = new PageObjectManager(page)
    const homePage = pom.getHomePage()
    await homePage.gotoPage()
    const result = await homePage.LoginWithInvalidUsernameAndPassword()
    expect(result.alertMsg).toBe("User does not exist.")
})

customLocators("TC007:Login and select product and add to cart",async({page,loginFunction})=>{
    await loginFunction( 
         data.validLogin.username,
         data.validLogin.password
        
    )
    const pom = new PageObjectManager(page)
    const homePage = pom.getHomePage()
    await homePage.chooseProduct("Samsung galaxy s6")
    const productPage=pom.getProductPage()
    
   const result=await productPage.addProductToCart()
   expect(result.alertMsg).toBe("Product added.")

 

})

customLocators("TC008:Login and select product from Phone category and complete purchase",async({page,loginFunction})=>{
    await loginFunction( 
         data.validLogin.username,
         data.validLogin.password
        
    )
    const pom = new PageObjectManager(page)
    const homePage = pom.getHomePage()
    await homePage.selectProductFromCategory("Phones","Nexus 6")
    const productPage=pom.getProductPage()
    const result=await productPage.addProductToCart()
    expect(result.alertMsg).toBe("Product added.")

    await homePage.naviagteToCartPage()
    const cartPage=pom.getCartPage()
    //verify product added
    await expect(cartPage.cartProduct.first()).toHaveText("Nexus 6")

    await cartPage.placeOrder()
    const checkoutpage=pom.getCheckOutPage()
    await checkoutpage.fillCustomerDetails(data.customerDetails)
    await checkoutpage.completePurchase()

    await expect(checkoutpage.thankyouMsg).toContainText("Thank you for your purchase!")

})

customLocators("TC009:Login and select product from Monitor category and complete purchase",async({page,loginFunction})=>{
    await loginFunction( 
         data.validLogin.username,
         data.validLogin.password
        
    )
    const pom = new PageObjectManager(page)
    const homePage = pom.getHomePage()
    await homePage.selectProductFromCategory("Monitors","Apple monitor 24")
    const productPage=pom.getProductPage()
    const result=await productPage.addProductToCart()
    expect(result.alertMsg).toBe("Product added.")

    await homePage.naviagteToCartPage()
    const cartPage=pom.getCartPage()
    //verify product added
    await expect(cartPage.cartProduct.first()).toHaveText("Apple monitor 24")

    await cartPage.placeOrder()
    const checkoutpage=pom.getCheckOutPage()
    await checkoutpage.fillCustomerDetails(data.customerDetails)
    await checkoutpage.completePurchase()

    await expect(checkoutpage.thankyouMsg).toContainText("Thank you for your purchase!")

})

customLocators("TC10:Login with valid credentials and logout",async({page,loginFunction})=>{
    await loginFunction( 
         data.validLogin.username,
         data.validLogin.password
        
    )
    const pom = new PageObjectManager(page)
    const homePage = pom.getHomePage()
    await homePage.logout()
})



