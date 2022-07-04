import { And, Then, When } from 'cypress-cucumber-preprocessor/steps';
import Ring from '../../../integration/pom/Rings';
import { HTML_ELEMENT } from '../../../integration/utils/testids/testids';

When('I view all available Engagement Rings in the {string}', (region) => {
    Ring.open(region);
});

When('I view the details of a ring', () => {
    Ring.selectAnItem();
});

Then('I should be able to filter the product by all available filters:', (dataTable) => {
    for(let i=0 ; i < dataTable.rawTable.length; i ++){
        cy.get(`${HTML_ELEMENT.NAVBAR_DROPDOWN}${i}`).find(HTML_ELEMENT.REFINEMENT_LABEL).should('include.text', dataTable.rawTable[i]);
    };
});

Then('I should be be able to personalise the ring on and add it to the shopping bag', () => {
    // hardcoding the ring size to 45, for future improvement will need to add tests to check all ring size available
    Ring.selectSize('45');
    cy.contains('span', 'Estimated delivery').should('exist');
    Ring.addToBag();
    cy.contains('span', 'Secure Checkout').should('exist');
});

And('the quantity in the basket should be {string}', (quantity) => {
    cy.get(HTML_ELEMENT.HEADER_SHOPPING_BAG).find(HTML_ELEMENT.MINI_CART_QUANTITY).should('have.text', quantity)
});