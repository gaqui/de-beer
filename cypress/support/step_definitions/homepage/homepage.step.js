import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import Homepage from '../../../integration/pom/Homepage';
import { HTML_ELEMENT } from '../../../integration/utils/testids/testids';

Given('a user from one of the {string}', (region) => {
	Homepage.open(region);
});

When('the user visits the {string} store front', (region) => {
	Homepage.acceptAllCookies();
    Homepage.closeSubscribeModal(region);
});

Then('they should be able to view the content related to the {string}', (region) => {
    cy.get(HTML_ELEMENT.TOP_BAR_LANGUAGE_LOCATION).should('contain.text', `De Beers ${region} `)
});