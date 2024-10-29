Feature: Login
  I as user
  I want a login to the application
  To do orders

  Scenario: Login with a success
    Given I am on the login screen
    When I fill the user email field
    And I fill the user password field
    And I click on Login button
    Then I am logged into the website for buy 
