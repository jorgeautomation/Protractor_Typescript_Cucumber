//from protractor
import { browser, element, by, $$, $ } from "protractor";

//export is to say this class is available for other classes
export class HomePage{

    //several elements, choosing the first one
    //var heading = element.all(by.css(".well.hoverwell.thumbnail>h2")).first();

    //collection, also it till iterate and print all the texts with that locator
    //var headings = element.all(by.css(".well.hoverwell.thumbnail>h2"));

    //var headings = $$(".well.hoverwell.thumbnail>h2"); using $$

    //Selenium framework development course heading
    heading = element(by.xpath("//h2[contains(text(),'Selenium Framework development')]"))
            .element(by.xpath("//span[contains(text(),'4th')]"));

    //All the heading
    headings = $$(".well.hoverwell.thumbnail>h2");

    //Open browser
    openBrowser(url: string){
        browser.get(url);
    }

    //Get all headings
    getAllHeadings(){
        this.headings.getText().then((text)=>{
            console.log("The heading is: " + text)
        });
    }

    //Click first heading
    clickFirstHeading(){
        this.heading.click();
    }

}