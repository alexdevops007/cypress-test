describe('Login Page Tests', () => {

  beforeEach(() => {
    // Visit the login page before each test
    cy.visit("/login");
  });

  // Test case: Verify that a user can log in with valid credentials
  it('should allow a user to log in with valid credentials', () => {
    cy.fixture('user').then((user) => {
      cy.login(user.validUser.email, user.validUser.password);
      cy.get('[data-testid="home"]').contains('MyNotes').should('be.visible');
    });
    
  })

  // Test case: Verify that an error message is displayed for invalid credentials
  it('should display an error message for invalid credentials', () => {
    cy.fixture('user').then((user) => {
      cy.login(user.invalidUser.email, user.invalidUser.password);
      cy.get('[data-testid="alert-message"]').should('be.visible').and('have.text', 'Incorrect email address or password');
    });
  });

  it('should display an error message for invalid email and password require', () => {
  cy.get('[data-testid="login-email"]').click();
  cy.get('[data-testid="login-email"]').type('test');
  cy.get('[data-testid="login-password"]').clear();
  cy.get('[data-testid="login-submit"]').click();
  cy.get('#root div:nth-child(1) > div.invalid-feedback').should('be.visible').and('have.text', 'Email address is invalid');
  cy.get('#root div:nth-child(2) > div.invalid-feedback').should('be.visible').and('have.text', 'Password is required');
});
});
