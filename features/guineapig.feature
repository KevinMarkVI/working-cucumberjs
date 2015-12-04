Feature: Manipulating the guinea pig test website

  Scenario: We want to check the first box and populate the email field
    Given we are looking at the guinea pig website
    When I populate the email field 
    Then it should contain the value I entered




