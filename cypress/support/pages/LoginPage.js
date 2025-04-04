import { LoginPageLocators } from "@support/locators";
import { ToasterMessages } from "@support/ToasterMessages";

class LoginPage {

    getEmailInputField(){
        return cy.get(LoginPageLocators.EmailId).should('be.visible'); //Get the email input field element
    }

    getRequestOTPbutton(){
        return cy.get(LoginPageLocators.OTPbutton).should('be.visible'); //Get the submit button element
    }

    changeemailbutton(){
        return cy.get(LoginPageLocators.ChangeEmailbutton)
            .should('be.visible') //Get the change email button element
            .should('contain', 'Change') //Check if the button contains the text 'Change'
            .click(); //Click the change email button
    }

    resendOTPbutton(){
        return cy.get(LoginPageLocatorsResendOTPbutton).should('be.visible'); //Get the resend OTP button element
    }

    clickVerifybutton(){
        return cy.get(LoginPageLocators.Verifybutton).should('be.visible'); //Get the verify button element
    }

    enterEmail(email){
        this.getEmailInputField().type(email); //Enter email or phone number
    }

    reenterEmail(email){
        this.getEmailInputField()
            .should('be.visible') //Check if the email input field is visible    
            .clear()
            .type(email); //Re-enter email or phone number
    }

    clickRequestOTPbutton(){
        this.getRequestOTPbutton().click(); //Click the Request OTP button
    }

    enternvalidemailnotifcation(){
        return cy.get(LoginPageLocators.InvalidEmailmessage)
            .should('be.visible') //Check if the notification is visible
            .and('contain', ToasterMessages.InvalidEmail) //Get the toast notification element
    }

    UnregisteredEmail(){
        return cy.get(LoginPageLocators.Emailmessages)
            .should('be.visible') //Check if the notification is visible
            .and('contain', ToasterMessages.UnregisteredEmail) //Get the toast notification element
    }


    otpnotreceived(){
        return cy.get(".kZYA3m"); //Text message to display if OTP was not received
    }

    getToasternotification(){
        return cy.get(".eIDgeN").should('be.visible'); //Get the toast notification element
    }

    verificationunsuccessful(){
        return cy.get("._2LM-Uv'"); //Get the verification successful toast notification element
    }
}

export default new LoginPage();