import HomePage from "../../support/pages/HomePage";


describe('HomePage Test Suite', () => {

    beforeEach(() => {
        cy.launchFlipkart();
        // Load fixture data and store it in 'this'
        cy.fixture('testData/categories').then((data) => {
            cy.wrap(data.expectedCategories).as('categories'); 
        });
    });

    it('Verify all the elements on the home page', () => {
        HomePage.getLogo()// Verify the flipkart logo
        HomePage.getSearchBox() // Verify the search box
        HomePage.getSearchButton() // Verify the search button
        HomePage.getLoginLink() // Verify the login link
        HomePage.getCartLink() // Verify the cart link
        HomePage.getResellerLink() // Verify the reseller link
        HomePage.getMoreLink() // Verify the more link
    });

    it('Verify the categories count', () => {
        HomePage.getCategoriesLink() // Check for 9 categories
    });

    it('Verify category names', () => {
        cy.get('@categories').then((expectedCategories) => {
            cy.verifyCategories(expectedCategories);// Verify the category names
        });
    });

    it('Verify the banner', () => {
        HomePage.getBanner() // Verify the banner
    });

    /*it('Verify the banner next and previous buttons', () => {
        HomePage.moveBannerNext().should('be.visible'); // Verify the next button
        HomePage.moveBannerNext().click(); // Click the next button
        HomePage.moveBannerPrevious().should('be.visible'); // Verify the previous button
        HomePage.moveBannerPrevious().click(); // Click the previous button
    });*/

});