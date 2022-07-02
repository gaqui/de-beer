import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import Ring from '../../../integration/pom/Rings';
import { HTML_ELEMENT } from '../../../integration/utils/testids/testids';

When('I view all available Engagement Rings in the {string}', (region) => {
    Ring.open(region);
});

Then('I should be able to filter the product by all available filters:', (dataTable) => {
    for(let i=0 ; i < dataTable.rawTable.length; i ++){
        cy.get(`${HTML_ELEMENT.NAVBAR_DROPDOWN}${i}`).find(HTML_ELEMENT.REFINEMENT_LABEL).should('include.text', dataTable.rawTable[i]);
    };
});