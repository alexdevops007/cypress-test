// @ts-check
describe("home page", () => {
  beforeEach(() => {
    // Visit the home page before each test
    cy.visit("/"); // Update with your application's URL
  });

  // Grouping tests related to title verification
  context.skip ("Title Verification", () => {
    // Test case 1: Verify the title of the home page
    it("should display the correct title using contains", () => {
      cy.get(".fw-bold.lh-1").contains("Welcome to Notes App"); 
    });

    // Test case 2: Verify the title of the home page using should
    it("should display the correct title using should", () => {
      cy.get(".fw-bold.lh-1").should("have.text", "Welcome to Notes App");
    });
  });

  // Grouping tests related to navigation for login and signup
  context("Navigation Tests", () => {
    it("should navigate to the login page when Login button is clicked", () => {
      cy.get('[data-testid="open-login-view"]').find('a').contains("Login").click();
      cy.url().should("include", "/login");
      cy.get('form').should('be.visible');
    });
    it("should navigate to the signup page when Sign Up button is clicked", () => {
      cy.get('[data-testid="open-register-view"]').contains("Create an account").click();
      cy.url().should("include", "/register");
      cy.get('form').should('be.visible');
    });
  });
});
