import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import Home from '../../../integration/pom/Home';
import { HTML_ELEMENT } from '../../../integration/utils/testids/testids';

Given('a user from one of the {string}', (region) => {
	Home.open(region);
});

When('the user visits the {string} store front', (region) => {
    Home.acceptAllCookies();
    // Home.closeSubscribeModal(region);
});

Then('they should be able to view the content related to the {string}', (region) => {
    cy.get(HTML_ELEMENT.TOP_BAR_LANGUAGE_LOCATION).should('contain.text', `De Beers ${region} `)
});