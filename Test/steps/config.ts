//To run this example, first transpile it to javascript with `npm run tsc`,
// then run `protractor conf.js`.
import {Config} from 'protractor';
import { CucumberReportExtension } from '../reporting/CucumberReportExtension';

export let config: Config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [ '../features/*.feature' ],

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    baseUrl: "http://localhost:8808/",

    //for running specific browser
    // capabilities:{
    //   "browserName":"firefox"
    // },

    //for parallel testing, it is an array
    multiCapabilities:[{
      "browserName":"firefox"
    },
    {
      "browserName":"chrome"
    }],

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

    onComplete: () =>{
      CucumberReportExtension.GenerateCucumberReport();
    }

}