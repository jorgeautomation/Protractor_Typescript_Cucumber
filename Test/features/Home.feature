Feature: To work with home page

   Working with home page

   @smoke
   Scenario: Click course of application
    Given I navigate to application
    And I get all the heading
    And I click the 'Selenium framework development' course
    Then I should see 'Selenium framework development' course in course details page