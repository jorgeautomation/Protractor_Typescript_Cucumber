import {BeforeAll, AfterAll, Before, After} from 'cucumber'
import { browser} from 'protractor';
import { config } from '../steps/config';

//changing asyng timeout, default is 5000 milliseconds, you can use 
//  {timeout: -1} to disable, just if necessary
//Before feature
BeforeAll({timeout: 100 * 1000}, async()=> {
    console.log("Executing before feature");
    
});

//Before each scenario
Before({timeout: 100 * 1000}, async()=> {
    //this comes from config.ts
    await browser.get(config.baseUrl);
});


//After each scenario
After({timeout: 100 * 1000}, async()=> {
    //this comes from config.ts
    console.log("Scenario executed");
});


AfterAll({timeout: 100 * 1000}, async()=> {
    console.log("Executing after feature");
});