import {BeforeAll, AfterAll, Before, After, setDefaultTimeout, Status} from 'cucumber'
import { browser} from 'protractor';
import { config } from '../steps/config';
import { CucumberReportExtension } from '../reporting/CucumberReportExtension';

setDefaultTimeout(50000)

//changing asyng timeout, default is 5000 milliseconds, you can use 
//  {timeout: -1} to disable, just if necessary
//Before feature
BeforeAll( async()=> {
    var jsonDir = process.cwd() + "/reports/json";
    CucumberReportExtension.CreateReportFile(jsonDir);
    console.log("Starting the application");
    
});

//Before each scenario, here we call the browser to refres the browser in each scenario with baseURL
Before(async()=> {
    //this comes from config.ts
    await browser.get(config.baseUrl);
});


//After each scenario
After(async function (Scenario){
    //this comes from config.ts
    console.log("Scenario executed");
    //take screenshot
    if(Scenario.result.status===Status.FAILED){
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
});




