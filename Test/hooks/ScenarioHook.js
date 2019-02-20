"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const config_1 = require("../steps/config");
//changing asyng timeout, default is 5000 milliseconds, you can use 
//  {timeout: -1} to disable, just if necessary
//Before feature
cucumber_1.BeforeAll({ timeout: 100 * 1000 }, async () => {
    console.log("Executing before feature");
});
//Before each scenario
cucumber_1.Before({ timeout: 100 * 1000 }, async () => {
    //this comes from config.ts
    await protractor_1.browser.get(config_1.config.baseUrl);
});
//After each scenario
cucumber_1.After({ timeout: 100 * 1000 }, async () => {
    //this comes from config.ts
    console.log("Scenario executed");
});
cucumber_1.AfterAll({ timeout: 100 * 1000 }, async () => {
    console.log("Executing after feature");
});
//# sourceMappingURL=ScenarioHook.js.map