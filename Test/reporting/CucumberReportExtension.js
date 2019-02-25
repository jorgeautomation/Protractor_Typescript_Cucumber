"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const mkdirp_1 = require("mkdirp");
const report = require("cucumber-html-reporter");
const Cucumber = require('cucumber');
class CucumberReportExtension {
    static CreateReportFile(dirName) {
        //Check if directory exist
        if (!fs.existsSync(dirName))
            mkdirp_1.mkdirp.sync(dirName);
    }
    static GenerateCucumberReport() {
        report.generate(CucumberReportExtension.cucumberReporterOptions);
    }
}
//process.cwd returns the current working directory, which in this case would be steps
//  because from there you run protactor config.js
CucumberReportExtension.jsonDir = process.cwd() + "/reports/json";
CucumberReportExtension.htmlDir = process.cwd() + "/reports/html";
CucumberReportExtension.jsonFile = CucumberReportExtension.jsonDir + "/cucumber_report.json";
CucumberReportExtension.cucumberReporterOptions = {
    theme: 'bootstrap',
    jsonFile: CucumberReportExtension.jsonFile,
    output: CucumberReportExtension.htmlDir + '/cucumber_report.html',
    reportSuiteAsScenarios: true,
    metadata: {
        "App Version": "0.3.2",
        "Test Environment": "Test",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Local"
    }
};
exports.CucumberReportExtension = CucumberReportExtension;
//# sourceMappingURL=CucumberReportExtension.js.map