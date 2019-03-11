"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CucumberReportExtension_1 = require("../reporting/CucumberReportExtension");
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../features/*.feature'],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: "http://localhost:8808/",
    //for running specific browser
    capabilities: {
        "browserName": "firefox"
    },
    //for parallel testing, it is an array
    //cucumber_json.json is not being updated when working parallel
    // multiCapabilities:[{
    //   "browserName":"firefox"
    // },
    // {
    //   "browserName":"chrome"
    // }],
    suites: {
        "homepage": "../features/Home.feature",
        "coursedetails": "../features/CourseDetails.feature"
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        //format: [],
        format: "json:./reports/json/cucumber_report.json",
        require: ['../steps/*.js', '../hooks/*.js'],
        tags: '@smoke or @regression'
    },
    onComplete: () => {
        CucumberReportExtension_1.CucumberReportExtension.GenerateCucumberReport();
    }
};
//# sourceMappingURL=config.js.map