import { Before } from 'cypress-cucumber-preprocessor/steps';

Before(() => {
    // this will disable the random pop-up on the screen 
    cy.setCookie('IgnorePopUpCookie', 'ignore');
});