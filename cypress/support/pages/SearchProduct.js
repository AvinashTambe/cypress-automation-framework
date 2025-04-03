class SearchProduct {
  
    getSearchInputField() {
        return cy.get('input.Pke_EE'); //Get the search input field element
    }

    enterSearchText(searchText) {
        this.getSearchInputField().type(searchText); //Enter the search text
    }

    clickSearchButton() {
        return cy.get('button._2iLD__').click(); //Click the search button
    }

    searchResults() {
        return cy.xpath("//span[@class='BUOuZu']"); //Get the search results container
    }

    minimumPricButton() {
        return cy.xpath("//div[@class='suthUA']//select[@class='Gn+jFg']");
    }

    maximumPriceButton() {
        return cy.xpath("//div[@class='tKgS7w']//select[@class='Gn+jFg']");
    }

    filterApplied() {
        return cy.xpath("//div[@class='_6tw8ju']");
    }

    invalidSearchMessage() {
        return cy.get('.BHPsUQ');
    }
}

export default new SearchProduct();