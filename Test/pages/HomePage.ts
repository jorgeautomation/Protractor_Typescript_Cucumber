//from protractor   
import { browser, element, by, $$, $ } from "protractor";
import { BasePage, IdentificationType } from "./BasePage";  

// this is object declaration, in this case a constant object
const Locators = {
    heading : {
        type:IdentificationType[IdentificationType.Xpath],
        value: "//h2[contains(text(),'Selenium Framework development')]"
    },

    headings : {
        type:IdentificationType[IdentificationType.Css],
        value: ".well.hoverwell.thumbnail>h2"
    }

}

//export is to say this class is available for other classes
export class HomePage extends BasePage{

    //several elements, choosing the first one
    //var heading = element.all(by.css(".well.hoverwell.thumbnail>h2")).first();

    //collection, also it till iterate and print all the texts with that locator
    //var headings = element.all(by.css(".well.hoverwell.thumbnail>h2"));

    //var headings = $$(".well.hoverwell.thumbnail>h2"); using $$

    //Selenium framework development course heading
   // heading = element(by.xpath("//h2[contains(text(),'Selenium Framework development')]"))
    //        .element(by.xpath("//span[contains(text(),'4th')]"));

    //All the heading
    //headings = $$(".well.hoverwell.thumbnail>h2");


    //Using inheritance for BasePage, and the the second part is locating element without using inheritance
    heading = this.elementLocator(Locators.headings).element(by.xpath("//span[contains(text(),'4th')]"));

    headings = this.elementLocator(Locators.headings);

    
    //Open browser
    async openBrowser(url: string){
        //this await works because get returns promise.Promise. hover over get to see it
       await browser.get(url);
    }

    //Get all headings
    async getAllHeadings(){
        await this.headings.getText().then((text)=>{
            console.log("The heading is: " + text)
        });
    }

    //Click first heading
    async clickFirstHeading(heading: string){
        console.log("Can I print the input value from stepdefinition, if yes, this is it: ", heading)
        await this.heading.click();
    }

}