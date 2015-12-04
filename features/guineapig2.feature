Feature: Manipulating the guinea pig test website 2

  Scenario: We want to check the first box and populate the email field 2
    Given we are looking at the guinea pig website
    When I populate the email field 
    Then it should contain the value I entered