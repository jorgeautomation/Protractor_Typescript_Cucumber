//from protractor
import { browser, element, by, $$ } from "protractor";
import { HomePage } from "./pages/HomePage";


describe("Going to write first test", ()=> {

    //Globally
    var homePage = new HomePage();
    
    it("should pass without any issued", ()=> {
        
        //Open browser
        homePage.openBrowser("http://localhost:8808");

        //Get headings 
        homePage.getAllHeadings(); 

        //Click on heading
        homePage.clickFirstHeading();

    });

    it("should not pass as the values are undefined", ()=> {
        let u=1;
        expect(u).toBeDefined("Not defined");
    });

    it("Without any expectation", ()=> {
       
    });

});