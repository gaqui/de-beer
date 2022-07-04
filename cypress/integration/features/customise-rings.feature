Feature: Customise and Purchase a Ring

    As a user, 
    from each of the different market regions, 
    I want to be able to add a Personalised Engagement Ring to the shopping bag

    Scenario Outline: User is able to see filters for customising a ring - "<Region>"
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
    
    Scenario Outline: User is able to add an item to basket - "<Region>"
        Given a user from one of the "<Region>"
        And the user visits the "<Region>" store front
        When I view all available Engagement Rings in the "<Region>"
        When I view the details of a ring
        Then I should be be able to personalise the ring on and add it to the shopping bag
        And the quantity in the basket should be "1"
        Examples:
            | Region            |
            | United Kingdom    |
            | France            |
            | Italy             |

    Scenario Outline: User is able to purchase item(s) in the basket - "<Region>"
        Given a user from one of the "<Region>"
        And the user visits the "<Region>" store front
        When I view all available Engagement Rings in the "<Region>"
        When I view the details of a ring
        Then I should be be able to personalise the ring on and add it to the shopping bag
        Then I can complete the purchase with selected payment method
        Examples:
            | Region            |
            | United Kingdom    |
            | France            |
            | Italy             |

    
