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

    getToasternotification(){
        return cy.get(".eIDgeN"); //Get the toast notification element
    }

    getOTPfields(){
        return cy.get("input.r4vIwl.IX3CMV"); //Get the OTP input fields
    }

    clickVerifybutton(){
        return cy.get("button[class='QqFHMw llMuju M5XAsp']"); //Get the verify button element
    }
}

export default new LoginPage();