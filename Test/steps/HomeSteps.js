"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const HomePage_1 = require("../pages/HomePage");
const chai_1 = require("chai");
const CourseDetails_1 = require("../pages/CourseDetails");
//global
var homePage = new HomePage_1.HomePage();
var courseDetails = new CourseDetails_1.CourseDetailsPage();
cucumber_1.Given(/^I navigate to application$/, async () => {
    //Open browser
    await homePage.openBrowser("http://localhost:8808");
});
cucumber_1.When(/^I get all the heading$/, async () => {
    //Get headings 
    await homePage.getAllHeadings();
});
//here the headingText variable is comming from the feature, that's why the regular expression '([^\"]*)' is there
cucumber_1.Then(/^I click the '([^\"]*)' course$/, async (headingText) => {
    //Click on heading
    await homePage.clickFirstHeading(headingText.toString());
});
//remember assertions should not happen in page objects, but in here, using Chai
cucumber_1.Then(/^I should see '([^\"]*)' course in course details page$/, async (course) => {
    chai_1.expect(courseDetails.gerCourseHeading).to.be.not.null;
});
//# sourceMappingURL=HomeSteps.js.map