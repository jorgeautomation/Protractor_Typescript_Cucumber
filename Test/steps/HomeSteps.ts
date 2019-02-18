import {defineSupportCode, Given} from 'cucumber'
import { HomePage } from '../pages/HomePage';


//global
var homePage = new HomePage();

Given(/^I navigate to application$/, async() => {
        //Open browser
        await homePage.openBrowser("http://localhost:8808");
});
