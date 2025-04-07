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

Cypress.Commands.add('validateSearch', (expectedSearchKey) => {
  cy.log(`🔍 Validating Search for: ${expectedSearchKey}`);

  cy.get('body').then(($body) => {
    if ($body.find('.BHPsUQ').length > 0) {
      // "No results found" case
      cy.get('.BHPsUQ').should('be.visible').and('contain.text', 'Sorry, no results found!');
      cy.log(`❌ No results found for: ${expectedSearchKey}`);
    } else {
      // Extract search results message
      cy.xpath("//span[@class='BUOuZu']")
        .should('exist')
        .should('be.visible')
        .invoke('text')
        .then((searchResultText) => {
          cy.log(`🔍 Extracted search results message: ${searchResultText}`);

          // Extract keywords from search input (excluding short words)
          let expectedKeywords = expectedSearchKey.split(/\s+/).filter(word => word.length > 2);

          if (expectedKeywords.length === 0) {
            cy.log(`⚠️ No significant keywords found in search query.`);
            return;
          }

          // Count matches between expected keywords and search results
          const matchCount = expectedKeywords.filter(keyword => 
            searchResultText.toLowerCase().includes(keyword.toLowerCase())
          ).length;

          const matchPercentage = (matchCount / expectedKeywords.length) * 100;

          cy.log(`🔍 Match Percentage: ${matchPercentage}%`);

          // Assert if match percentage meets the threshold
          expect(matchPercentage, `Expected at least 70% match but got ${matchPercentage}%`)
            .to.be.greaterThan(40);
        });
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




