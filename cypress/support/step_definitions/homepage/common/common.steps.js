import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('I can complete the purchase with selected payment method', () => {
	cy.completePurchase();
});