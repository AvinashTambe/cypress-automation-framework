class LoginPage {

    getLoginLink(){
        return cy.get("a[title='Login'] span"); //Get the login link element
    }

    getEmailInputField(){
        return cy.get("input[class='r4vIwl BV+Dqf']");
    }

    enterEmail(email){
        this.getEmailInputField().type(email); //Enter email or phone number
    }

    getRequestOTPbutton(){
        return cy.get(".QqFHMw.twnTnD._7Pd1Fp"); //Get the submit button element
    }

    clickRequestOTPbutton(){
        this.getRequestOTPbutton().click(); //Click the Request OTP button
    }

    entervalidemailnotifcation(){
        return cy.get("span[class='llBOFA'] span"); //Get the toast notification element
    }

    changeemailbutton(){
        return cy.get(".azBkHf"); //Get the change email button element
    }

    otpnotreceived(){
        return cy.get(".kZYA3m"); //Text message to display if OTP was not received
    }

    resendOTPbutton(){
        return cy.get("rMF9Z9"); //Get the resend OTP button element
    }

    

    getToasternotification(){
        return cy.get(".eIDgeN"); //Get the toast notification element
    }

    clickVerifybutton(){
        return cy.get("button[class='QqFHMw llMuju M5XAsp']"); //Get the verify button element
    }

    verificationunsuccessful(){
        return cy.get("._2LM-Uv'"); //Get the verification successful toast notification element
    }
}

export default new LoginPage();