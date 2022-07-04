import { DATA_IDS, HTML_ELEMENT } from '../integration/utils/testids/testids';

Cypress.Commands.add('fillInCustomerDetails', () => {
        cy.get(HTML_ELEMENT.LOGIN_FORM_EMAIL).type('testing@testing.com')
        cy.get(HTML_ELEMENT.SUBMIT_GUEST_CUSTOMER).click();
        cy.get(HTML_ELEMENT.CUSTOMER_TITLE).select('Mr');
        cy.get(HTML_ELEMENT.SHIPPING_FIRSTNAME).type('test');
        cy.get(HTML_ELEMENT.SHIPPING_LASTNAME).type('test');
        cy.get(HTML_ELEMENT.ACCOUNT_MOBILE_NUMBER).type('772288331');
        cy.get(HTML_ELEMENT.SHIPPING_ADDRESS).type('random address');
        cy.get(HTML_ELEMENT.SHIPPING_ADDRESS_CITY).type('Lost City');
        cy.get(HTML_ELEMENT.SHIPPING_ZIPCODE).type('aa0 0aa');
});

Cypress.Commands.add('fillInPaymentDetails', () => {
        // Currently there is an issue with tests unable to type inside a js frame
        // will need to investigate and find a way around it as at the moment the care input fields are empty
        cy.get(DATA_IDS.CARD_NUMBER).type(41111111111111); 
        cy.get(DATA_IDS.EXPIRY_DATE).type(1130);
        cy.get(DATA_IDS.SECURITY_CODE).type(111);
});

Cypress.Commands.add('completePurchase', () => {
        cy.contains('span', 'Secure Checkout').click();
        cy.fillInCustomerDetails();
        cy.contains('button', ' CONTINUE TO PAYMENT').click();
        cy.fillInPaymentDetails();
        cy.contains('button', 'Continue to Review').click();
});
