import {expect} from "@playwright/test"

export class Utilities{

    constructor(page){
        this.page=page
    }
    handleAlertAndVerifyText(expectedMsg){
        this.page.on("dialog",async dialog=>{
            let msg=dialog.message()
            console.log("Alert message",msg)
            expect(msg).toBe(expectedMsg)

            await dialog.accept()
        })
    }

    generateUniqueUsername(){
        return "testrider"+Date.now()
    }
}