import { baseUrl, logo } from "../support/data";

describe("UI", () => {
  it("UI: Test001: Ensure user can navigate to the application successfully", () => {
    cy.visit(baseUrl);
    cy.url().should("eq", baseUrl);
  });

  it("UI: Test002: Ensure application name should be visible correctly", () => {
    cy.visit(baseUrl);
    cy.get('h1:contains("ERS")').should("be.visible");
  });

  it("UI: Test003: Ensure application logo should be visible correctly", () => {
    cy.visit(baseUrl);
    cy.get(`.w-16.h-16`)
      .should("be.visible")
      .find(`path[d="${logo}"]`)
      .should("exist");
  });

  it("UI: Test004: Ensure event page header visible correctly", () => {
    cy.visit(baseUrl);
    cy.get('h1:contains("Events")').should("be.visible");
  });

  it("UI: Test005: Ensure login button should be visible to the user", () => {
    cy.visit(baseUrl);
    cy.get('button:contains("Login")').should("be.visible");
  });

  it("UI: Test006: Ensure search bar for event should be visible properly", () => {
    cy.visit(baseUrl);
    cy.get('input[placeholder="Search Event"]').should("be.visible");
  });

  it("UI: Test007: Ensure search bar should be focused properly upon clicking on it", () => {
    cy.visit(baseUrl);
    cy.get('input[placeholder="Search Event"]')
      .should("be.visible")
      .click({ force: true })
      .should("be.focused");
  });
});
