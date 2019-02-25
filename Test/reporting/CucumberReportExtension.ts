import * as fs from 'fs'
import {mkdirp} from 'mkdirp'
import * as report from 'cucumber-html-reporter'

const Cucumber = require('cucumber')

export class CucumberReportExtension{

    //process.cwd returns the current working directory, which in this case would be steps
    //  because from there you run protactor config.js
    private static jsonDir = process.cwd() + "/reports/json";
    private static htmlDir = process.cwd() + "/reports/html";
    private static jsonFile = CucumberReportExtension.jsonDir + "/cucumber_report.json";

    private static cucumberReporterOptions = {
        theme: 'bootstrap',
        jsonFile: CucumberReportExtension.jsonFile,
        output: CucumberReportExtension.htmlDir + '/cucumber_report.html',
        reportSuiteAsScenarios: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "Test",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Local"
        }
    };

    public static CreateReportFile(dirName){
        //Check if directory exist
        if(!fs.existsSync(dirName))
            mkdirp.sync(dirName);
    }

    public static GenerateCucumberReport(){
        report.generate(CucumberReportExtension.cucumberReporterOptions);
    }


}
