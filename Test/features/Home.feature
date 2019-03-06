Feature: To work with home page

   Working with home page


   @smoke
   Scenario: Click course of application
    When I get all the heading
    Then I click the 'Selenium framework development' course
    Then I should see 'Selenium framework development' course in course details page
    Then I should see all course information in coursedetails page
      |Course     |Duration   |
      |Selenium   |2          |
      |Java       |3          |

    @regression
   Scenario: Click course of application second time
    When I get all the heading
    Then I click the 'Selenium framework development' course
    Then I should see 'Selenium framework development' course in course details page

   @regression
   Scenario: Search for course for External Datasource
    Given I navigate to application
    When I enter text in search from external data source
    When I get all the heading