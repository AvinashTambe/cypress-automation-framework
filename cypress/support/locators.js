"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePageLocators = void 0;
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
