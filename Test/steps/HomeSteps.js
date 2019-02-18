"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const HomePage_1 = require("../pages/HomePage");
//global
var homePage = new HomePage_1.HomePage();
cucumber_1.Given(/^I navigate to application$/, async () => {
    //Open browser
    await homePage.openBrowser("http://localhost:8808");
});
//# sourceMappingURL=HomeSteps.js.map