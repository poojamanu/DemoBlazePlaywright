import { test, expect } from "@playwright/test"
import { PageObjectManager } from "../Pages/PageObjectManager"

import { customLocators } from "../fixtures/loginFixture"

customLocators("TC007:Login and select any product and add to cart",async({page,loginFunction})=>{
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