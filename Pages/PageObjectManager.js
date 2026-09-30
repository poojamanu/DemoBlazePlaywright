import { HomePage } from "./HomePage.js";

export class PageObjectManager{
    constructor(page){
        this.homePage=new HomePage(page)
        
    }

    getHomePage(){
        return this.homePage
    }
    
}