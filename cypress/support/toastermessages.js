// cypress/support/toastermessages.js

class LoginPageToasterMessages {
    static UnregisteredEmail = "You are not registered with us. Please sign up.";
    static InvalidEmail = "Please enter valid Email ID/Mobile number";
    static OTPnotreceived = "Not received your code?";
    static OTPsent = "Verification code sent to";
    static IncorrectOTP = "OTP is incorrect";
  }
  
  class SearchProductPageToasterMessages {
    static NoResultsFound = "Sorry, no results found!";
  }
  
  module.exports = {
    LoginPageToasterMessages,
    SearchProductPageToasterMessages
  };
  