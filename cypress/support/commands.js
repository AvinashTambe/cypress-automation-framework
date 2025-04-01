import 'cypress-xpath';

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
  
Cypress.Commands.add("getOTPfields", () => {
    return cy.get(".XDRRi5 input"); // Ensure correct selector
});
  
Cypress.Commands.add("verificationUnsuccessfulState", () => {
  return cy.get("._2LM-Uv", { timeout: 2000 }) // Replace with actual error toast locator
      .should('be.visible')
      .and('contain', 'Verification unsuccessful') // Check for the expected text
      .then(() => {
          cy.log('❌ Verification failed.');
          return true; // ✅ Return `true` if verification failed
      }, (error) => {
          // If the element is not found or any other error occurs, handle it here
          cy.log('✅ Verification was successful. Proceeding...');
          return false; // ✅ Return `false` if verification passed
      });
});


