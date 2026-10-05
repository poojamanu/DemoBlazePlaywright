# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Demoblaze.spec.js >> TC10:Login with valid credentials and logout
- Location: tests\Demoblaze.spec.js:145:15

# Error details

```
TypeError: homePage.logout is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - text:             
  - navigation [ref=f1e2]:
    - link "PRODUCT STORE" [ref=f1e3] [cursor=pointer]:
      - /url: index.html
    - list [ref=f1e6]:
      - listitem [ref=f1e7]:
        - link "Home (current)" [ref=f1e8] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=f1e9]: (current)
      - listitem [ref=f1e10]:
        - link "Contact" [ref=f1e11] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f1e12]:
        - link "About us" [ref=f1e13] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f1e14]:
        - link "Cart" [ref=f1e15] [cursor=pointer]:
          - /url: cart.html
      - listitem
      - listitem [ref=f1e16]:
        - link "Log out" [ref=f1e17] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f1e18]:
        - link "Welcome testrider" [ref=f1e19] [cursor=pointer]:
          - /url: "#"
      - listitem
    - generic [ref=f1e21]:
      - list [ref=f1e22]:
        - listitem [ref=f1e23] [cursor=pointer]
        - listitem [ref=f1e24] [cursor=pointer]
        - listitem [ref=f1e25] [cursor=pointer]
      - img "First slide" [ref=f1e28]
      - button "Previous" [ref=f1e29] [cursor=pointer]
      - button "Next" [ref=f1e32] [cursor=pointer]
  - generic [ref=f1e36]:
    - generic [ref=f1e38]:
      - link "CATEGORIES" [ref=f1e39] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=f1e40] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=f1e41] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=f1e42] [cursor=pointer]:
        - /url: "#"
    - generic [ref=f1e43]:
      - generic [ref=f1e44]:
        - generic [ref=f1e46]:
          - link [ref=f1e47] [cursor=pointer]:
            - /url: prod.html?idp_=1
          - generic [ref=f1e48]:
            - heading [level=4] [ref=f1e49]:
              - link "Samsung galaxy s6" [ref=f1e50] [cursor=pointer]:
                - /url: prod.html?idp_=1
            - heading "$360" [level=5] [ref=f1e51]
            - paragraph [ref=f1e52]: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
        - generic [ref=f1e54]:
          - link [ref=f1e55] [cursor=pointer]:
            - /url: prod.html?idp_=2
          - generic [ref=f1e56]:
            - heading [level=4] [ref=f1e57]:
              - link "Nokia lumia 1520" [ref=f1e58] [cursor=pointer]:
                - /url: prod.html?idp_=2
            - heading "$820" [level=5] [ref=f1e59]
            - paragraph [ref=f1e60]: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
        - generic [ref=f1e62]:
          - link [ref=f1e63] [cursor=pointer]:
            - /url: prod.html?idp_=3
          - generic [ref=f1e64]:
            - heading [level=4] [ref=f1e65]:
              - link "Nexus 6" [ref=f1e66] [cursor=pointer]:
                - /url: prod.html?idp_=3
            - heading "$650" [level=5] [ref=f1e67]
            - paragraph [ref=f1e68]: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
        - generic [ref=f1e70]:
          - link [ref=f1e71] [cursor=pointer]:
            - /url: prod.html?idp_=4
          - generic [ref=f1e72]:
            - heading [level=4] [ref=f1e73]:
              - link "Samsung galaxy s7" [ref=f1e74] [cursor=pointer]:
                - /url: prod.html?idp_=4
            - heading "$800" [level=5] [ref=f1e75]
            - paragraph [ref=f1e76]: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
        - generic [ref=f1e78]:
          - link [ref=f1e79] [cursor=pointer]:
            - /url: prod.html?idp_=5
          - generic [ref=f1e80]:
            - heading [level=4] [ref=f1e81]:
              - link "Iphone 6 32gb" [ref=f1e82] [cursor=pointer]:
                - /url: prod.html?idp_=5
            - heading "$790" [level=5] [ref=f1e83]
            - paragraph [ref=f1e84]: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
        - generic [ref=f1e86]:
          - link [ref=f1e87] [cursor=pointer]:
            - /url: prod.html?idp_=6
          - generic [ref=f1e88]:
            - heading [level=4] [ref=f1e89]:
              - link "Sony xperia z5" [ref=f1e90] [cursor=pointer]:
                - /url: prod.html?idp_=6
            - heading "$320" [level=5] [ref=f1e91]
            - paragraph [ref=f1e92]: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
        - generic [ref=f1e94]:
          - link [ref=f1e95] [cursor=pointer]:
            - /url: prod.html?idp_=7
          - generic [ref=f1e96]:
            - heading [level=4] [ref=f1e97]:
              - link "HTC One M9" [ref=f1e98] [cursor=pointer]:
                - /url: prod.html?idp_=7
            - heading "$700" [level=5] [ref=f1e99]
            - paragraph [ref=f1e100]: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
        - generic [ref=f1e102]:
          - link [ref=f1e103] [cursor=pointer]:
            - /url: prod.html?idp_=8
          - generic [ref=f1e104]:
            - heading [level=4] [ref=f1e105]:
              - link "Sony vaio i5" [ref=f1e106] [cursor=pointer]:
                - /url: prod.html?idp_=8
            - heading "$790" [level=5] [ref=f1e107]
            - paragraph [ref=f1e108]: Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight.
        - generic [ref=f1e110]:
          - link [ref=f1e111] [cursor=pointer]:
            - /url: prod.html?idp_=9
          - generic [ref=f1e112]:
            - heading [level=4] [ref=f1e113]:
              - link "Sony vaio i7" [ref=f1e114] [cursor=pointer]:
                - /url: prod.html?idp_=9
            - heading "$790" [level=5] [ref=f1e115]
            - paragraph [ref=f1e116]: REVIEW Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight, higher-resolution display, more storage space, and a Blu-ray drive.
      - list [ref=f1e118]:
        - listitem [ref=f1e119]:
          - button "Previous" [ref=f1e120]
        - listitem [ref=f1e121]:
          - button "Next" [ref=f1e122] [cursor=pointer]
  - generic [ref=f1e124]:
    - generic [ref=f1e127]:
      - heading "About Us" [level=4] [ref=f1e128]
      - paragraph [ref=f1e129]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=f1e132]:
      - heading "Get in Touch" [level=4] [ref=f1e133]
      - paragraph [ref=f1e134]: "Address: 2390 El Camino Real"
      - paragraph [ref=f1e135]: "Phone: +440 123456"
      - paragraph [ref=f1e136]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=f1e140]
  - contentinfo [ref=f1e142]:
    - paragraph [ref=f1e143]: Copyright © Product Store
```

# Test source

```ts
  53  | })
  54  | 
  55  | test("TC005:Login with invalid Username ", async ({ page }) => {
  56  |     const pom = new PageObjectManager(page)
  57  |     const homePage = pom.getHomePage()
  58  |     await homePage.gotoPage()
  59  |      const loginPage=pom.getLoginPage()
  60  |     
  61  |     const result = await loginPage.LoginWithInvalidUsername()
  62  |     expect(result.alertMsg).toBe("User does not exist.")
  63  | })
  64  | 
  65  | test("TC006:Login with invalid Username and invalid password", async ({ page }) => {
  66  |     const pom = new PageObjectManager(page)
  67  |     const homePage = pom.getHomePage()
  68  |     await homePage.gotoPage()
  69  |     const result = await homePage.LoginWithInvalidUsernameAndPassword()
  70  |     expect(result.alertMsg).toBe("User does not exist.")
  71  | })
  72  | 
  73  | customLocators("TC007:Login and select any product and add to cart",async({page,loginFunction})=>{
  74  |     await loginFunction( 
  75  |          data.validLogin.username,
  76  |          data.validLogin.password
  77  |         
  78  |     )
  79  |     const pom = new PageObjectManager(page)
  80  |     const homePage = pom.getHomePage()
  81  |     await homePage.chooseProduct("Samsung galaxy s6")
  82  |     const productPage=pom.getProductPage()
  83  |     
  84  |    const result=await productPage.addProductToCart()
  85  |    expect(result.alertMsg).toBe("Product added.")
  86  | 
  87  |  
  88  | 
  89  | })
  90  | 
  91  | customLocators("TC008:Login and select product from Phone category and complete purchase",async({page,loginFunction})=>{
  92  |     await loginFunction( 
  93  |          data.customer1Details.username,
  94  |          data.customer1Details.password
  95  |         
  96  |     )
  97  |     const pom = new PageObjectManager(page)
  98  |     const homePage = pom.getHomePage()
  99  |     await homePage.selectProductFromCategory(data.customer1Details.category,data.customer1Details.product)
  100 |     const productPage=pom.getProductPage()
  101 |     const result=await productPage.addProductToCart()
  102 |     expect(result.alertMsg).toBe("Product added.")
  103 | 
  104 |     await homePage.naviagteToCartPage()
  105 |     const cartPage=pom.getCartPage()
  106 |     //verify product added
  107 |     //await expect(cartPage.cartProduct.first()).toHaveText("Nexus 6")
  108 |      expect(cartPage.cartProduct.filter({hasText:data.customer1Details.product}))
  109 |     await cartPage.placeOrder()
  110 |     const checkoutpage=pom.getCheckOutPage()
  111 |     await checkoutpage.fillCustomerDetails(data.customer1Details)
  112 |     await checkoutpage.completePurchase()
  113 | 
  114 |     await expect(checkoutpage.thankyouMsg).toContainText("Thank you for your purchase!")
  115 | 
  116 | })
  117 | 
  118 | customLocators("TC009:Login and select product from Monitor category and complete purchase",async({page,loginFunction})=>{
  119 |     await loginFunction( 
  120 |          data.customer2Details.username,
  121 |          data.customer2Details.password
  122 |         
  123 |     )
  124 |     const pom = new PageObjectManager(page)
  125 |     const homePage = pom.getHomePage()
  126 |     await homePage.selectProductFromCategory("Monitors",data.customer2Details.product)
  127 |     const productPage=pom.getProductPage()
  128 |     const result=await productPage.addProductToCart()
  129 |     expect(result.alertMsg).toBe("Product added.")
  130 | 
  131 |     await homePage.naviagteToCartPage()
  132 |     const cartPage=pom.getCartPage()
  133 |     //verify product added
  134 |     //await expect(cartPage.cartProduct.first()).toHaveText("Apple monitor 24")
  135 |      expect(cartPage.cartProduct.filter({hasText:data.customer2Details.product}))
  136 |     await cartPage.placeOrder()
  137 |     const checkoutpage=pom.getCheckOutPage()
  138 |     await checkoutpage.fillCustomerDetails(data.customer2Details)
  139 |     await checkoutpage.completePurchase()
  140 | 
  141 |     await expect(checkoutpage.thankyouMsg).toContainText("Thank you for your purchase!")
  142 | 
  143 | })
  144 | 
  145 | customLocators("TC10:Login with valid credentials and logout",async({page,loginFunction})=>{
  146 |     await loginFunction( 
  147 |          data.validLogin.username,
  148 |          data.validLogin.password
  149 |         
  150 |     )
  151 |     const pom = new PageObjectManager(page)
  152 |     const homePage = pom.getHomePage()
> 153 |     await homePage.logout()
      |                    ^ TypeError: homePage.logout is not a function
  154 | })
  155 | 
  156 | 
  157 | 
  158 | 
```