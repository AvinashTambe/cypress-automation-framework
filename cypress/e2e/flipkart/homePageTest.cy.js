import HomePage from "../../support/pages/HomePage";

describe('HomePage Test Suite', () => {

    beforeEach(() => {
        cy.launchFlipkart();
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
        HomePage.getCategoriesLink().should('have.length', 9); // Check for 9 categories
    });

    it('Verify category names', () => {
        const expectedCategories = [
          'Kilos', 
          'Mobiles', 
          'Fashion', 
          'Electronics', 
          'Home & Furniture', 
          'Appliances', 
          'Flight Bookings', 
          'Beauty, Toys & More', 
          'Two Wheelers'
            ]; // Expected category names
        HomePage.getCategoriesLink().then(($elements) => { // Get all category elements
            const actualCategories = [...$elements].map(el => el.textContent.trim()); // Extract text content
            expectedCategories.forEach(category => { // Verify each category
                expect(actualCategories).to.include(category); // Check if the category is present
            });
        });
    });

    it('Verify the banner', () => {
        HomePage.getBanner().should('be.visible')
            .not('[data-clone="true"]')  // Exclude cloned ones
            .should('have.length', 5); // Check for 5 banners
    });

    /*it('Verify the banner next and previous buttons', () => {
        HomePage.moveBannerNext().should('be.visible'); // Verify the next button
        HomePage.moveBannerNext().click(); // Click the next button
        HomePage.moveBannerPrevious().should('be.visible'); // Verify the previous button
        HomePage.moveBannerPrevious().click(); // Click the previous button
    });*/

});