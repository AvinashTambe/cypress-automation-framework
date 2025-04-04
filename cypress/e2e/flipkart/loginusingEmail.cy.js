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
        LoginPage.UnregisteredEmail(); // Check if the toast notification is visible
    });
    
    
    it('verify login with invalid or empty email', () => {
        HomePage.getLoginLink().click(); // Click the login link
        LoginPage.getEmailInputField()
        LoginPage.enterEmail("test>"); // Enter empty email
        LoginPage.clickRequestOTPbutton(); // Click the Request OTP button
        LoginPage.enternvalidemailnotifcation() // Check if the toast notification is visible
    });

    it('change email for login', () => {
        HomePage.getLoginLink().click(); // Click login link
        LoginPage.getEmailInputField(); // Check if the email input field is visible
        LoginPage.enterEmail(Cypress.env("INITIAL_USER")); // Enter initial email
        LoginPage.clickRequestOTPbutton(); // Click "Request OTP"
        cy.verificationUnsuccessfulState().then((failed) => {
            if (failed) {
                cy.log('❌ Verification failed. Stopping test execution.');
                return; // ✅ STOP test execution here
            }
    
            // ✅ Proceed only if verification passed
            LoginPage.changeemailbutton()
            LoginPage.reenterEmail(Cypress.env("EMAIL_USER")); // Enter new email
        });
    });
    
    

    /*it('verify resend OTP functionality', () => {
        LoginPage.getLoginLink().click(); // Click the login link
        LoginPage.getEmailInputField().should('be.visible');
        LoginPage.enterEmail(Cypress.env("EMAIL_USER")); // Enter email or phone number
        LoginPage.clickRequestOTPbutton(); // Click the Request OTP button
        cy.wait(2000); // Wait for the toast notification to appear
        cy.verificationUnsuccessfulState().then((failed) => {
            if (failed) {
                cy.log('❌ Verification failed. Stopping test execution.');
                return; // ✅ STOP test execution here
            }
            cy.wait(2000); // Wait for the toast notification to appear
            LoginPage.otpnotreceived()
                .should('be.visible') // Check if the OTP not received message is visible
                .and('contain', 'Not received your code? '); // Check if the OTP not received message contains the expected text
            
            LoginPage.resendOTPbutton().should('be.visible').click(); // Click the resend OTP button
            LoginPage.getToasternotification()
                .should('be.visible') // Check if the toast notification is visible
                .and('contain', 'Verification code sent to'); // Check if the toast notification contains the expected message
            cy.log("✅ Resend OTP test passed");
        });
    });


    it('verify incorrect OTP entered functionality', () => {
        LoginPage.getLoginLink().click(); // Click the login link
        LoginPage.getEmailInputField().should('be.visible');
        LoginPage.enterEmail(Cypress.env("EMAIL_USER")); // Enter email or phone number
        LoginPage.clickRequestOTPbutton(); // Click the Request OTP button
        cy.wait(2000); // Wait for the toast notification to appear
        cy.verificationUnsuccessfulState().then((failed) => {
            if (failed) {
                cy.log('❌ Verification failed. Stopping test execution.');
                return; // ✅ STOP test execution here
            }
            LoginPage.getToasternotification()
                .should('be.visible') // Check if the toast notification is visible
                .and('contain', 'Verification code sent to'); // Check if the toast notification contains the expected message
            cy.log("✅ OTP sent successfully");
            cy.wait(3000); // Ensure enough delay for OTP to be processed
            // Enter incorrect OTP
            const otp = "123456"; // Example incorrect OTP
            cy.getOTPfields().each((input, index) => {
                cy.wrap(input).clear().type(otp[index]); // Enter each digit separately
            });
            cy.log("✅ Incorrect OTP Entered");
            LoginPage.clickVerifybutton().should("be.visible").click(); // Click the Verify button

            cy.wait(2000); // Wait for the error message to appear
            LoginPage.getToasternotification()
                .should('be.visible') // Check if the toast notification is visible
                .and('contain', 'Incorrect OTP'); // Check if the toast notification contains the expected message
            cy.log("✅ Incorrect OTP test passed");
        });
    });

    it("extract OTP and enter correct OTP", () => {
        LoginPage.getLoginLink().click(); // Click the login link
        LoginPage.getEmailInputField().should('be.visible');
        LoginPage.enterEmail(Cypress.env("EMAIL_USER")); // Enter email or phone number
        LoginPage.clickRequestOTPbutton(); // Click the Request OTP button

        // Retry fetching OTP every 5 seconds, up to 3 times
        cy.wait(5000); // Initial wait for OTP email to arrive
        cy.verificationUnsuccessfulState().then((failed) => {
            if (failed) {
                cy.log('❌ Verification failed. Stopping test execution.');
                return; // ✅ STOP test execution here
            }
            cy.getOTP().then((otp) => {
                cy.log("✅ Latest OTP Retrieved: " + otp);
                expect(otp).to.match(/^\d{6}$/); // Validate OTP format
                cy.wrap(otp).as("otpValue"); // Store OTP using Cypress alias
            });

            cy.wait(3000); // Ensure enough delay for OTP to be processed

            // Retrieve OTP from alias and enter it into fields
            cy.get("@otpValue").then((otp) => {
                cy.getOTPfields().each((input, index) => {
                    cy.wrap(input).clear().type(otp[index]); // Enter each digit separately
                });
            });

            cy.log("✅ OTP Entered Successfully");
            LoginPage.clickVerifybutton().should("be.visible").click(); // Click the Verify button
        });
    });*/

    
});
