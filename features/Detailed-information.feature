Feature: Detailed Information
  As a user, I want to be able to get detailed information about a product so the user 
  can determine if its interested or not.

  Background:
    Given that we are on ikea's website
    And that we accepted the standard cookie policy
    

  Scenario: Display product information about a specific product
    Given I am on Products parent category
    When I click on Möbler
    And I click on Bord
    And I click on Sandsberg
    Then I click on Product information
    Then the detailed product information about Sandsberg is opened with details

  