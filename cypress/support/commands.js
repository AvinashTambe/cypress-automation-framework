import 'cypress-xpath';
//import HomePage from '@support/pages/HomePage';
import HomePage from './pages/HomePage';


// ✅ Launch Flipkart
Cypress.Commands.add('launchFlipkart', () => {
    cy.visit('https://www.flipkart.com/');
});

Cypress.Commands.add("getOTP", () => {
    return cy.task("fetchOTP", {
      emailUser: Cypress.env("EMAIL_USER"),
      emailPass: Cypress.env("EMAIL_PASS"),
      imapHost: Cypress.env("IMAP_HOST"),
      imapPort: parseInt(Cypress.env("IMAP_PORT") || "993"),
    }).then((otp) => {
      if (!otp) {
        throw new Error("❌ No OTP found in email. Check logs for details.");
      }
      return otp;
    });
  });

  
Cypress.Commands.add("verificationUnsuccessfulState", () => {
  return cy.get('body').then(($body) => {
      if ($body.find('._2LM-Uv').length > 0) {
          // ✅ If error toast is found, verify the message
          return cy.get('._2LM-Uv')
              .should('be.visible')
              .and('contain', 'Verification unsuccessful')
              .then(() => {
                  cy.log('❌ Verification failed.');
                  return cy.wrap(true); // Verification failed
              });
      } else {
          // ✅ No error message found, verification was successful
          cy.log('✅ Verification was successful. Proceeding...');
          return cy.wrap(false); // Verification successful
      }
  });
});


Cypress.Commands.add('verifyCategories', (categories) => {
  HomePage.getCategoriesLink().then(($elements) => {
      const actualCategories = [...$elements].map(el => el.textContent.trim());

      categories.forEach(category => {
          expect(actualCategories).to.include(category); // Check if each category is present
      });
  });
});




