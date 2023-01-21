
Feature: Shopping cart adding products
  As a user, I want to be able to add 1 to several
  copies of an item in the shopping cart so that I can buy it

  Background:
    Given that we are on ikea's website
    And that we accepted the standard cookie policy
  
  Scenario: Add copies of an item in shopping cart
    Given I add 1 "Brimnes" product
    When I add 2 copies of items from shopping cart
    ##Then the shopping cart must display 3 products

  Scenario: Add copies of an another item in shopping cart
    Given I add 1 "Slattum" product
    When I add 4 copies of items from shopping cart
    ##Then the shopping cart must display 5 products
