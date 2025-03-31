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
  
