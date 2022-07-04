Feature: View Content base on region

    As user,
    from different market region,
    So that I can add and also edit sections to a page

    Scenario Outline: Market Content is displayed base on the user "<Region>"
        Given a user from one of the "<Region>"
        When the user visits the "<Region>" store front
        Then they should be able to view the content related to the "<Region>"
        Examples:
            | Region            |
            | United Kingdom    |
            | France            |
            | Italy             |
