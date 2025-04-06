"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchProductPageLocators = exports.LoginPageLocators = exports.HomePageLocators = void 0;
var HomePageLocators;
(function (HomePageLocators) {
    HomePageLocators["Logo"] = "//img[@title='Flipkart']";
    HomePageLocators["SearchBox"] = "input[placeholder='Search for Products, Brands and More']";
    HomePageLocators["SearchButton"] = "button[title='Search for Products, Brands and More']";
    HomePageLocators["LoginLink"] = "a[title='Login'] span";
    HomePageLocators["CartLink"] = "img[alt='Cart']";
    HomePageLocators["ResellerLink"] = "(//img[@alt='Become a Seller'])[1]";
    HomePageLocators["MoreLink"] = "img[alt='Dropdown with more help links']";
    HomePageLocators["CategoriesLink"] = "._1ch8e_";
    HomePageLocators["Banner"] = "._8S67Ib"; // Banner element
})(HomePageLocators || (exports.HomePageLocators = HomePageLocators = {}));
var LoginPageLocators;
(function (LoginPageLocators) {
    //EmailId = "input[class='r4vIwl BV+Dqf']", // Email ID input field
    LoginPageLocators["EmailId"] = ".r4vIwl";
    LoginPageLocators["OTPbutton"] = ".QqFHMw.twnTnD._7Pd1Fp";
    LoginPageLocators["ChangeEmailbutton"] = ".azBkHf";
    LoginPageLocators["ResendOTPbutton"] = ".rMF9Z9";
    LoginPageLocators["Verifybutton"] = "button[class='QqFHMw llMuju M5XAsp']";
    LoginPageLocators["Emailmessages"] = ".eIDgeN";
    LoginPageLocators["InvalidEmailmessage"] = "span[class='llBOFA'] span";
    LoginPageLocators["OTPnotReceived"] = ".kZYA3m";
    LoginPageLocators["OTPfield"] = ".XDRRi5 input"; // OTP field
})(LoginPageLocators || (exports.LoginPageLocators = LoginPageLocators = {}));
var SearchProductPageLocators;
(function (SearchProductPageLocators) {
    SearchProductPageLocators["Searchbar"] = "input.Pke_EE";
    SearchProductPageLocators["SearchButton"] = "button._2iLD__";
    SearchProductPageLocators["SearchResults"] = "//span[@class='BUOuZu']";
    SearchProductPageLocators["Minpricebutton"] = "//div[@class='suthUA']//select[@class='Gn+jFg']";
    SearchProductPageLocators["Maxpricebutton"] = "//div[@class='tKgS7w']//select[@class='Gn+jFg']";
    SearchProductPageLocators["Filterapplied"] = "//div[@class='_6tw8ju']";
    SearchProductPageLocators["Invalidsearch"] = ".BHPsUQ"; // Invalid search notification
})(SearchProductPageLocators || (exports.SearchProductPageLocators = SearchProductPageLocators = {}));
