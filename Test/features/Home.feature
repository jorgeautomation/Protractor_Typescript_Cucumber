Feature: To work with home page

   Working with home page


   @smoke
   Scenario: Click course of application
    When I get all the heading
    Then I click the 'Selenium framework development' course
    Then I should see 'Selenium framework development' course in course details page

    @regression
   Scenario: Click course of application second time
    When I get all the heading
    Then I click the 'Selenium framework development' course
    Then I should see 'Selenium framework development' course in course details page