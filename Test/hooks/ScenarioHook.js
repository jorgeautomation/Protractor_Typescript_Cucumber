"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const config_1 = require("../steps/config");
const CucumberReportExtension_1 = require("../reporting/CucumberReportExtension");
cucumber_1.setDefaultTimeout(50000);
//changing asyng timeout, default is 5000 milliseconds, you can use 
//  {timeout: -1} to disable, just if necessary
//Before feature
cucumber_1.BeforeAll(async () => {
    var jsonDir = process.cwd() + "/reports/json";
    CucumberReportExtension_1.CucumberReportExtension.CreateReportFile(jsonDir);
    console.log("Starting the application");
});
//Before each scenario, here we call the browser to refres the browser in each scenario with baseURL
cucumber_1.Before(async () => {
    //this comes from config.ts
    await protractor_1.browser.get(config_1.config.baseUrl);
});
//After each scenario
cucumber_1.After(async function (Scenario) {
    //this comes from config.ts
    console.log("Scenario executed");
    //take screenshot
    if (Scenario.result.status === cucumber_1.Status.FAILED) {
        const screenShot = await protractor_1.browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
});
//# sourceMappingURL=ScenarioHook.js.map