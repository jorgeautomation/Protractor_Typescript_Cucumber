//To run this example, first transpile it to javascript with `npm run tsc`,
// then run `protractor conf.js`.
import {Config} from 'protractor';

export let config: Config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [ '../features/*.feature' ],

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    baseUrl: "http://localhost:8808/",

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: [],
        require: ['../steps/*.js'],
        tags: '@smoke'
  }

}