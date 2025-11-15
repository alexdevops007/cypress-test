describe("API of account creation", () => {
  const baseApiUrl =
    "https://practice.expandtesting.com/notes/api/users/register";

  it("should successfully create a new user account via API", () => {
    const uniqueEmail = `user${Date.now()}@example.com`;
    cy.request({
      method: "POST",
      url: baseApiUrl,
      body: {
        name: "Test User",
        email: uniqueEmail,
        password: "password123",
        confirm_password: "password123",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property(
        "message",
        "User account created successfully"
      );
    });
  });

  it("should return an error for already existing email", () => {
    const existingEmail = "egec.rdc1@gmail.com";
    cy.request({
      method: "POST",
      url: baseApiUrl,
      body: {
        name: "Test User",
        email: existingEmail,
        password: "password123",
        confirm_password: "password123",
      },
      failOnStatusCode: false, // Prevent Cypress from failing the test on non-2xx status codes
    }).then((response) => {
      expect(response.status).to.eq(409);
      expect(response.body).to.have.property(
        "message",
        "An account already exists with the same email address"
      );
    });
  });
});
