import { LoginPageLocators } from "@support/locators";
import { ToasterMessages } from "@support/ToasterMessages";

class LoginPage {

    getEmailInputField(){
        return cy.get(LoginPageLocators.EmailId)
            .should('be.visible'); //Get the email input field element
    }

    getRequestOTPbutton(){
        return cy.get(LoginPageLocators.OTPbutton)
            .should('be.visible'); //Get the submit button element
    }

    changeemailbutton(){
        return cy.get(LoginPageLocators.ChangeEmailbutton)
            .should('be.visible') //Get the change email button element
            .should('contain', 'Change') //Check if the button contains the text 'Change'
            .click(); //Click the change email button
    }

    resendOTPbutton(){
        return cy.get(LoginPageLocators.ResendOTPbutton, { timeout: 20000 })
            .should('be.visible')
            .click(); //Get the resend OTP button element
    }

    clickVerifybutton(){
        return cy.get(LoginPageLocators.Verifybutton)
            .should('be.visible')
            .click(); //Get the verify button element
    }

    enterEmail(email){
        this.getEmailInputField().type(email); //Enter email or phone number
    }

    reenterEmail(email){
        this.getEmailInputField()
            .should('be.visible') //Check if the email input field is visible    
            .clear()
            .type(email) //Re-enter email or phone number
            .should('contain.value', email); //Check if the email input field contains the entered email
    }

    clickRequestOTPbutton(){
        this.getRequestOTPbutton().click(); //Click the Request OTP button
    }

    enterOTP(otp) {
        return cy.get(LoginPageLocators.OTPfield)
            .should('be.visible')
            .should('have.length', otp.length)
            .each((input, index) => {
                cy.wrap(input).clear().type(otp[index]);
            });
    }

    InvalidEmailToaster(){
        return cy.get(LoginPageLocators.InvalidEmailmessage)
            .should('be.visible') //Check if the notification is visible
            .and('contain', ToasterMessages.InvalidEmail) //Get the toast notification element
    }

    UnregisteredEmailToaster(){
        return cy.get(LoginPageLocators.Emailmessages)
            .should('be.visible') //Check if the notification is visible
            .and('contain', ToasterMessages.UnregisteredEmail) //Get the toast notification element
    }

    OTPsentToaster(expectedEmail){
        const fullMessage = `${ToasterMessages.OTPsent} ${expectedEmail}`;//Construct the full message
        return cy.get(LoginPageLocators.Emailmessages)
            .should('be.visible') //Check if the notification is visible
            .and('have.text', fullMessage) //Get the toast notification element
    }

    OTPnotreceivedToaster(){
        return cy.get(LoginPageLocators.OTPnotReceived)
        .should('be.visible') // Check if the OTP not received message is visible
        .and('contain', 'Not received your code? '); // Check if the OTP not received message contains the expected text //Text message to display if OTP was not received
    }

    IncorrectOTPToaster(){
        return cy.get(LoginPageLocators.Emailmessages)
            .should('be.visible') //Check if the notification is visible
            .and('contain', ToasterMessages.IncorrectOTP) //Get the toast notification element
    }

    
}

export default new LoginPage();