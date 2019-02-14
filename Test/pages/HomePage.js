"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//from protractor
const protractor_1 = require("protractor");
//export is to say this class is available for other classes
class HomePage {
    constructor() {
        //several elements, choosing the first one
        //var heading = element.all(by.css(".well.hoverwell.thumbnail>h2")).first();
        //collection, also it till iterate and print all the texts with that locator
        //var headings = element.all(by.css(".well.hoverwell.thumbnail>h2"));
        //var headings = $$(".well.hoverwell.thumbnail>h2"); using $$
        //Selenium framework development course heading
        this.heading = protractor_1.element(protractor_1.by.xpath("//h2[contains(text(),'Selenium Framework development')]"))
            .element(protractor_1.by.xpath("//span[contains(text(),'4th')]"));
        //All the heading
        this.headings = protractor_1.$$(".well.hoverwell.thumbnail>h2");
    }
    //Open browser
    openBrowser(url) {
        protractor_1.browser.get(url);
    }
    //Get all headings
    getAllHeadings() {
        this.headings.getText().then((text) => {
            console.log("The heading is: " + text);
        });
    }
    //Click first heading
    clickFirstHeading() {
        this.heading.click();
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=HomePage.js.map