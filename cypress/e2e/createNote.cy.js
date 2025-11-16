describe("creation and verification of note", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.fixture("user").then((user) => {
      cy.login(user.validUser.email, user.validUser.password);
      cy.get('[data-testid="home"]').contains("MyNotes").should("be.visible");
    });

    // Clean up existing notes before each test
    cy.get('[data-testid="notes-list"]').then(($body) => {
      if ($body.find('[data-testid="note-card"]').length > 0) {
        cy.get('[data-testid="note-card"]').each(($el) => {
          cy.wrap($el)
            .find('[data-testid="note-delete"]')
            .click()
            .get('[data-testid="note-delete-confirm"]')
            .click({ force: true });
        });
      }
    });

    cy.get('[data-testid="add-new-note"]').click();
    cy.get("#root div.modal-title")
      .should("be.visible")
      .and("have.text", "Add new note");
  });
  it("create a note in the home category and check if it is presente in home and all tabs", () => {
    cy.get('[data-testid="note-category"]').select("Home");
    cy.get('[data-testid="note-completed"]').check();
    cy.get('[data-testid="note-title"]').click();
    cy.get('[data-testid="note-title"]').type("Deuxième note");
    cy.get('[data-testid="note-description"]').click();
    cy.get('[data-testid="note-description"]').type(
      "Ici c'est la deuxième note.\nC'est très important.\nMerci"
    );
    cy.get('[data-testid="note-submit"]').click();

    // Verify note in All category
    cy.get('[data-testid="category-all"] span').click();
    cy.get(
      'div:nth-child(2) > [data-testid="note-card"] > [data-testid="note-card-title"]'
    )
      .should("be.visible")
      .and("have.text", "Deuxième note");

    // Verify note in Home category
    cy.get('[data-testid="category-home"] span:nth-child(1)').click();
    cy.get(
      'div:nth-child(2) > [data-testid="note-card"] > [data-testid="note-card-title"]'
    )
      .should("be.visible")
      .and("have.text", "Deuxième note");
    cy.get(
      'div:nth-child(2) > [data-testid="note-card"] > div.card-body > [data-testid="note-card-description"]'
    ).should(
      "have.text",
      "Ici c'est la deuxième note.C'est très important.Merci"
    );
    cy.get(
      'div:nth-child(2) > [data-testid="note-card"] > div.card-footer > [data-testid="toggle-note-switch"]'
    ).should("have.class", "form-check-input");
  });
});
