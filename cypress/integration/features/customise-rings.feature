Feature: View Content base on region

    As a user, 
    from each of the different market regions, 
    I want to be able to add a Personalised Engagement Ring to the shopping bag

    Scenario Outline: Market Content is displayed base on the user "<Region>"
        Given a user from one of the "<Region>"
        And the user visits the "<Region>" store front
        When I view all available Engagement Rings in the "<Region>"
        Then I should be able to filter the product by all available filters:
            | Material    |
            | Size        |
            | Cut         |
            | Price       |
        Examples:
            | Region            |
            | United Kingdom    |
            | France            |
            | Italy             |