Feature: View Content base on region

    As user,
    from different market region,
    So that I can add and also edit sections to a page

    Scenario Outline: Add "Because you Watched" with expected content types - UK
        When select "<content>" content type
        And I submit using "Add" button
        And I click on edit "Because you Watched: X" section
        Then I should see content types "<content>"
        Examples:
            | content    |
            | Sky Store  |
            | Sky Cinema |
            | Catch Up   |
            | Box Sets   |