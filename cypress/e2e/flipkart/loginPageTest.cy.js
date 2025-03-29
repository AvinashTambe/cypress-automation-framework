import LoginPage from "../../support/pages/LoginPage";

describe('LoginPage Test Suite', () => {

    beforeEach(() => {
        cy.launchFlipkart();
    });

    it('Verify the login Link and button', () => {
        LoginPage.getLoginLink().should('be.visible'); // Verify the login link
        LoginPage.getLoginLink().should('have.text', 'Login'); // Verify the login link text
        LoginPage.getLoginLink().click(); // Click the login link
    });

    it('Verify the email or phone number input field', () => {
        LoginPage.getLoginLink().click(); // Click the login link
        LoginPage.getEmailInputField().should('be.visible'); // Verify the email or phone number input field        
    });

    it('Login with email and enter OTP', function () {
        cy.loginWithEmail(Cypress.env('EMAIL_USER'));  // ✅ Use Cypress.env()

        // Wait for OTP email and enter the OTP
        cy.task('getOTPFromEmail').then((otp) => {  
            cy.log('Received OTP: ' + otp);
        
            LoginPage.getOTPfields().should('have.length', 6).then(($otpFields) => {
                const otpDigits = otp.split('');
        
                if ($otpFields.length !== otpDigits.length) {
                    throw new Error('Mismatch between OTP length and input fields count');
                }
        
                cy.wrap($otpFields).each(($field, index) => {
                    cy.wrap($field).clear().type(otpDigits[index], { force: true });
                });
            });
        
            LoginPage.clickVerifybutton().should('be.visible').click();
        });
        
                
    });

});



    
