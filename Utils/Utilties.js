import { expect } from "@playwright/test"

export class Utilities {

    constructor(page) {
        this.page = page
    }
    handleAlert() {
        this.page.once("dialog", async dialog => {
            console.log("Alert message:", dialog.message())
            await dialog.accept()
        })
    }

    handleAlertAsPromise() {
        return new Promise(resolve => {
            this.page.once("dialog", async dialog => {
                const message = dialog.message()
                await dialog.accept()
                resolve(message)
            })
        })
    }

    generateUniqueUsername() {
        return "testrider" + Date.now()
    }
}