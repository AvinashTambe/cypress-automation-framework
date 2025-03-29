import 'cypress-xpath';

// ✅ Launch Flipkart
Cypress.Commands.add('launchFlipkart', () => {
    cy.visit('https://www.flipkart.com/');
});

// ✅ Login via Email
Cypress.Commands.add("loginWithEmail", (email) => {
    cy.get("a[title='Login'] span").should('be.visible').click(); // Click login link
    cy.get("input[class*='r4vIwl']").should('be.visible').clear().type(email); // Enter email
    cy.get(".QqFHMw.twnTnD._7Pd1Fp").should('be.enabled').click(); // Click OTP button
    cy.get(".eIDgeN").should('be.visible').and('contain.text', 'Verification code sent'); // Verify toast message
});


