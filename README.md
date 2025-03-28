# Cypress Automation for Flipkart Web Application

## Overview
This repository contains automated test scripts for testing the Flipkart web application using Cypress. The goal is to ensure the stability and functionality of key features of the Flipkart website through end-to-end testing.

## Technologies Used
- **Cypress**: JavaScript-based end-to-end testing framework
- **Node.js**: Required to run Cypress
- **Mocha & Chai**: For assertions and test structuring
- **GitHub Actions** (optional): For CI/CD automation

## Prerequisites
Ensure you have the following installed before running the tests:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)
- Cypress (Install via npm/yarn)

## Installation & Setup
Clone the repository:
```sh
git clone https://github.com/your-username/your-repo-name.git](https://github.com/AvinashTambe/cypress-automation-framework.git
cd your-repo-name
```

Install dependencies:
```sh
npm install
```

## Running Tests
To open the Cypress Test Runner:
```sh
npx cypress open
```

To run tests in headless mode:
```sh
npx cypress run
```

## Project Structure
```
|-- cypress/
|   |-- integration/     # Test cases
|   |-- fixtures/        # Test data
|   |-- plugins/         # Cypress plugins
|   |-- support/         # Custom commands and utilities
|-- cypress.json         # Cypress configuration file
|-- package.json         # Project dependencies
|-- README.md            # Project documentation
```

## Writing Test Cases
Test cases are written inside `cypress/integration/`.
Example test case:
```javascript
describe('Flipkart Search Functionality', () => {
    it('should search for a product and display results', () => {
        cy.visit('https://www.flipkart.com');
        cy.get('input[title="Search for products, brands and more"]').type('Laptop{enter}');
        cy.get('div._1AtVbE').should('contain', 'Laptop');
    });
});
```

## CI/CD Integration
To run Cypress tests in a CI/CD pipeline, add the following GitHub Actions workflow:

```yaml
name: Cypress Tests
on: [push, pull_request]
jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Run Cypress tests
        run: npx cypress run
```

## Reporting
Cypress provides built-in reporting, but you can integrate it with Mocha reports for detailed insights.
To generate reports, install `mochawesome`:
```sh
npm install mochawesome --save-dev
```
Run Cypress with:
```sh
npx cypress run --reporter mochawesome
```

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License
This project is licensed under the [MIT License](LICENSE).

---
Happy Testing! 🚀

