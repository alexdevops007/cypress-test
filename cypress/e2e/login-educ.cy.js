describe("Login Page Tests", () => {
  const baseUrl = "https://e-educ-corr-frontend.vercel.app";

  beforeEach(() => {
    // Visit the login page before each test
    cy.visit(baseUrl);
  });

  // Test case: Verify that a user can log in with valid credentials
  it("should allow a user to log in with valid credentials", () => {
    cy.get("#email").click();
    cy.get("#email").type("courrier-02@gmail.com");
    cy.get("#password").click();
    cy.get("#password").type("courrier");
    cy.get("#app button.w-full").click();
    cy.get("#app h1.text-xl").should("be.visible");
    cy.get("#app h1.text-xl").should(
      "have.text",
      " Tableau de Bord - Service Courrier "
    );
    cy.get("#app button.text-red-600").click();
  });

  // Test case: Verify that an error message is displayed for invalid credentials
  it("should allow a user to see the error message when their user account is already logged in", () => {
    cy.get("#email").click();
    cy.get("#email").type("courrier-02@gmail.com");
    cy.get("#password").click();
    cy.get("#password").type("courrier");
    cy.get("#app button.w-full").click();
    cy.get("#app div.bg-red-100").should("be.visible");
    cy.get("#app div.bg-red-100").should(
      "have.text",
      "Cet utilisateur est déjà connecté sur un autre poste."
    );
  });

  // Test case: Verify that an error message is displayed for invalid credentials
  it("should allow a user to log in with invalid credentials", () => {
    cy.get("#email").click();
    cy.get("#email").type("courrier-01@gmail.com");
    cy.get("#password").click();
    cy.get("#password").type("k,gkfgklgkllf");
    cy.get("#app button.w-full").click();
  });
});
