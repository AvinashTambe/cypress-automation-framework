import 'cypress-xpath';

// Add the following code to cypress/support/commands.js to launch the Flipkart application
Cypress.Commands.add('launchFlipkart', () => {
    cy.visit('https://www.flipkart.com/');
});
