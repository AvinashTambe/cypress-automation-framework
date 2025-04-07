// cypress/support/locators.js

class HomePageLocators {
    static Logo = "//img[@title='Flipkart']";
    static SearchBox = "input[placeholder='Search for Products, Brands and More']";
    static SearchButton = "button[title='Search for Products, Brands and More']";
    static LoginLink = "a[title='Login'] span";
    static CartLink = "img[alt='Cart']";
    static ResellerLink = "(//img[@alt='Become a Seller'])[1]";
    static MoreLink = "img[alt='Dropdown with more help links']";
    static CategoriesLink = "._1ch8e_";
    static Banner = "._8S67Ib";
  }
  
  class LoginPageLocators {
    static EmailId = ".r4vIwl";
    static OTPbutton = ".QqFHMw.twnTnD._7Pd1Fp";
    static ChangeEmailbutton = ".azBkHf";
    static ResendOTPbutton = ".rMF9Z9";
    static Verifybutton = "button[class='QqFHMw llMuju M5XAsp']";
    static Emailmessages = ".eIDgeN";
    static InvalidEmailmessage = "span[class='llBOFA'] span";
    static OTPnotReceived = ".kZYA3m";
    static OTPfield = ".XDRRi5 input";
  }
  
  class SearchProductPageLocators {
    static Searchbar = 'input[name="q"]';
    //static Searchbar = ".Pke_EE";
    static SearchButton = "button[type='submit']";
    static SearchResults = "//span[@class='BUOuZu']";
    static Minpricebutton = "//div[@class='suthUA']//select[@class='Gn+jFg']";
    static Maxpricebutton = "//div[@class='tKgS7w']//select[@class='Gn+jFg']";
    static Filterapplied = "//div[@class='_6tw8ju']";
    static Invalidsearch = ".BHPsUQ";
  }
  
  module.exports = {
    HomePageLocators,
    LoginPageLocators,
    SearchProductPageLocators
  };
  