import LoginPage from "../../support/pages/LoginPage";
import HomePage from "../../support/pages/HomePage";

describe('LoginPage Test Suite', () => {

    beforeEach(() => {
        cy.launchFlipkart();
    });

    it('verify login with unregistered email', () => {
        HomePage.getLoginLink().click(); // Click the login link
        LoginPage.getEmailInputField(); 
        LoginPage.enterEmail("invalid_user@gmail.com"); // Enter invalid email
        LoginPage.clickRequestOTPbutton(); // Click the Request OTP button
        LoginPage.UnregisteredEmailToaster(); // Check if the toast notification is visible
    });
    
    
    it('verify login with invalid or empty email', () => {
        HomePage.getLoginLink().click(); // Click the login link
        LoginPage.getEmailInputField()
        LoginPage.enterEmail("test>"); // Enter empty email
        LoginPage.clickRequestOTPbutton(); // Click the Request OTP button
        LoginPage.InvalidEmailToaster() // Check if the toast notification is visible
    });

    it('change email for login', () => {
        HomePage.getLoginLink().click(); // Click login link
        LoginPage.getEmailInputField(); // Check if the email input field is visible
        LoginPage.enterEmail(Cypress.env("INITIAL_USER")); // Enter initial email
        LoginPage.clickRequestOTPbutton(); // Click "Request OTP"
        LoginPage.OTPsentToaster(Cypress.env("INITIAL_USER")); // Check if the toast notification is visible
        cy.verificationUnsuccessfulState().then((failed) => {
            if (failed) {
                cy.log('❌ Verification failed. Stopping test execution.');
                return; // ✅ STOP test execution here
            }
    
            // ✅ Proceed only if verification passed
            LoginPage.changeemailbutton()
            LoginPage.reenterEmail(Cypress.env("EMAIL_USER")); // Enter new email
            LoginPage.clickRequestOTPbutton(); // Click "Request OTP"
            LoginPage.OTPsentToaster(Cypress.env("EMAIL_USER")); // Check if the toast notification is visible
        });
    });
    
    it('verify resend OTP functionality', () => {
        HomePage.getLoginLink().click(); // Click the login link
        LoginPage.getEmailInputField()
        LoginPage.enterEmail(Cypress.env("EMAIL_USER")); // Enter email or phone number
        LoginPage.clickRequestOTPbutton(); // Click the Request OTP button
        LoginPage.OTPsentToaster(Cypress.env("EMAIL_USER")); // Check if the toast notification is visible
        cy.verificationUnsuccessfulState().then((failed) => {
            if (failed) {
                cy.log('❌ Verification failed. Stopping test execution.');
                return; // ✅ STOP test execution here
            }
            LoginPage.OTPnotreceivedToaster()
            LoginPage.resendOTPbutton()// Click the resend OTP button
            LoginPage.OTPsentToaster(Cypress.env("EMAIL_USER")); 
        });
    });


    it('verify incorrect OTP entered functionality', () => {
        HomePage.getLoginLink().click(); // Click the login link
        LoginPage.getEmailInputField();
        LoginPage.enterEmail(Cypress.env("EMAIL_USER")); // Enter email or phone number
        LoginPage.clickRequestOTPbutton(Cypress.env("EMAIL_USER")); // Click the Request OTP button
        LoginPage.OTPsentToaster(Cypress.env("EMAIL_USER")); // Check if the toast notification is visible
        cy.verificationUnsuccessfulState().then((failed) => {
            if (failed) {
                cy.log('❌ Verification failed. Stopping test execution.');
                return; // ✅ STOP test execution here
            }
            // Enter incorrect OTP
            const otp = "123456"; // Example incorrect OTP
            LoginPage.enterOTP(otp); // Enter incorrect OTP
            LoginPage.clickVerifybutton();// Click the Verify button
            LoginPage.IncorrectOTPToaster(); // Check if the toast notification is visible
        });
    });

    it("extract OTP and enter correct OTP", () => {
        HomePage.getLoginLink().click(); // Click the login link
        LoginPage.getEmailInputField().should('be.visible');
        LoginPage.enterEmail(Cypress.env("EMAIL_USER")); // Enter email or phone number
        LoginPage.clickRequestOTPbutton(); // Click the Request OTP button
    
        cy.wait(5000); // Wait for OTP email to arrive
    
        cy.verificationUnsuccessfulState().then((failed) => {
            if (failed) {
                cy.log('❌ Verification failed. Stopping test execution.');
                return;
            }
    
            cy.getOTP().then((otp) => {
                expect(otp).to.match(/^\d{6}$/); // ✅ Validate OTP format
                LoginPage.enterOTP(otp);         // ✅ Enter OTP only inside this block
                LoginPage.clickVerifybutton();   // ✅ Click Verify button after OTP is entered
            });
        });
    });
    
});
