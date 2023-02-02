
Feature: Calculating products in the shopping cart
  As a user, I want the shopping cart to count correctly so that
  I can see the total price before I choose to shop

  Background:
    Given that we are on ikea's website
    And that we accepted the standard cookie policy

  Scenario: Search and add one product from the ikea:s website
    When I add "Slattum" to the shopping cart
    Then the shopping cart must display 1 products and the price
    
  
  Scenario: Search and add one product from the ikea:s website
    When I add "Malm" to the shopping cart
    Then the shopping cart must display 1 products and the price
  

  
