//from protractor
import { browser, element, by, $$ } from "protractor";
import { HomePage } from "./pages/HomePage";


describe("Going to write first test", ()=> {

    //Globally
    var homePage = new HomePage();
    
    it("should pass without any issued", async ()=> {
        
        //Open browser
        await homePage.openBrowser("http://localhost:8808");

        //Get headings 
        await homePage.getAllHeadings(); 

        //Click on heading
        await homePage.clickFirstHeading();

    });

    it("should not pass as the values are undefined", ()=> {
        
    });

    it("Without any expectation", ()=> {
      
    });

});