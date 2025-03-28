class HomePage {
  
  getLogo(){
    return cy.xpath("//img[@title='Flipkart']"); //Get the logo element
  }

  getSearchBox(){
    return cy.get("input[placeholder='Search for Products, Brands and More']"); //Get the search box element
  }

  getSearchButton(){
    return cy.get("button[title='Search for Products, Brands and More']"); //Get the search button element
  }

  getLoginLink(){
    return cy.get("a[title='Login'] span"); //Get the login link element
  }

  getCartLink(){
    return cy.get("img[alt='Cart']"); //Get the cart link element
  }

  getResellerLink(){
    return cy.xpath("(//img[@alt='Become a Seller'])[1]"); //Get the reseller link element
  }

  getMoreLink(){
    return cy.get("img[alt='Dropdown with more help links']"); //Get the more link element
  }

}

export default new HomePage();