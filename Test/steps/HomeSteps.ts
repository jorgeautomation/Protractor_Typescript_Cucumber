import {Given, When, Then} from 'cucumber'
import { HomePage } from '../pages/HomePage';
import {expect} from 'chai';
import { CourseDetailsPage } from '../pages/CourseDetails';

//global
var homePage = new HomePage();
var courseDetails = new CourseDetailsPage();

Given(/^I navigate to application$/, async() => {
    //Open browser
    await homePage.openBrowser("http://localhost:8808");
});

When(/^I get all the heading$/, async() => {
    //Get headings 
    await homePage.getAllHeadings(); 
});

//here the headingText variable is comming from the feature, that's why the regular expression '([^\"]*)' is there
Then(/^I click the '([^\"]*)' course$/, async(headingText) => {
    //Click on heading
    await homePage.clickFirstHeading(headingText.toString()); 
});

//remember assertions should not happen in page objects, but in here, using Chai
Then(/^I should see '([^\"]*)' course in course details page$/, async(course) => {
   expect(courseDetails.gerCourseHeading).to.be.not.null;
});
