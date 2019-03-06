import {Given, When, Then, TableDefinition} from 'cucumber'
import { HomePage } from '../pages/HomePage';
import {expect, assert} from 'chai';
import { CourseDetailsPage } from '../pages/CourseDetails';
import { assertPlatform } from '@angular/core';

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

Then(/^I should see all course information in coursedetails page$/, async(table: TableDefinition) => {

    let localTable = [[ 'Selenium', '2' ],[ 'Python', '3' ]]

    await table.rows().forEach(element => {
        console.log(element);
    });

    //this is from chai, it compares all the values in both tables
    assert.deepEqual(localTable, table.rows(), "The data source does not matches with the step definition table");

 });

 When(/^I enter text in search from external data source$/, async() => {
    //await homePage.EnterDataInSearchFromJson();
    await homePage.EnterDataInSearchFromExcel();
    
 });
 
