"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//from protractor   
const protractor_1 = require("protractor");
const BasePage_1 = require("./BasePage");
const json = require("load-json-file");
const ExcelUtil_1 = require("../utilities/ExcelUtil");
// this is object declaration, in this case a constant object
const Locators = {
    heading: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: "//h2[contains(text(),'Selenium Framework development')]"
    },
    headings: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: ".well.hoverwell.thumbnail>h2"
    },
    searchText: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: "[class='form-control']"
    }
};
//export is to say this class is available for other classes
class HomePage extends BasePage_1.BasePage {
    constructor() {
        //several elements, choosing the first one
        //var heading = element.all(by.css(".well.hoverwell.thumbnail>h2")).first();
        super(...arguments);
        //collection, also it till iterate and print all the texts with that locator
        //var headings = element.all(by.css(".well.hoverwell.thumbnail>h2"));
        //var headings = $$(".well.hoverwell.thumbnail>h2"); using $$
        //Selenium framework development course heading
        // heading = element(by.xpath("//h2[contains(text(),'Selenium Framework development')]"))
        //        .element(by.xpath("//span[contains(text(),'4th')]"));
        //All the heading
        //headings = $$(".well.hoverwell.thumbnail>h2");
        //Using inheritance for BasePage, and the the second part is locating element without using inheritance
        this.heading = this.elementLocator(Locators.headings).element(protractor_1.by.xpath("//span[contains(text(),'4th')]"));
        this.headings = this.elementLocator(Locators.headings);
        this.searchText = this.elementLocator(Locators.searchText);
    }
    //Open browser
    async openBrowser(url) {
        //this await works because get returns promise.Promise. hover over get to see it
        await protractor_1.browser.get(url);
    }
    //Get all headings
    async getAllHeadings() {
        await this.headings.getText().then((text) => {
            console.log("The heading is: " + text);
        });
    }
    //Click first heading
    async clickFirstHeading(heading) {
        console.log("Can I print the input value from stepdefinition, if yes, this is it: ", heading);
        await this.heading.click();
    }
    async EnterDataInSearchFromJson() {
        json.default("./data.json").then((x) => {
            console.log(x);
            //casting what is in the parenthesis, so we request the key and it should return the value
            this.searchText.sendKeys(x.SearchValue);
        });
    }
    async EnterDataInSearchFromExcel() {
        //this way you can get the value
        //let sheet = ExcelUtil.ReadExcelSheet("./data.xlsx");
        //console.log((<any>sheet).SearchValue);
        //this will bring with an specific strong type
        //the atributes appearing when you hit sheet. are appering for the cast of the 
        //interface
        let dir = process.cwd() + "/data.xlsx";
        let sheet = ExcelUtil_1.ExcelUtil.ReadExcelSheet(dir);
        console.log(sheet.SearchValue);
        //enter value in text box
        this.searchText.sendKeys(sheet.SearchValue);
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=HomePage.js.map