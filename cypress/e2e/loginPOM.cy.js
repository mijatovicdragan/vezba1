/// <reference types="Cypress" />

import { authPage } from "../page_objects/loginPage";
import { faker } from "@faker-js/faker";

const credentials = {
  validEmail: "nedovic.filip@gmail.com",
  validPassword: "Test12345",
  invalidEmail: faker.internet.email(),
  invalidPassword: faker.lorem.word(),
};

describe("login tests", () => {
  beforeEach("visit app and click the login link", () => {
    cy.visit("/");
    authPage.loginLink.click();
    cy.url().should("include", "/login");
    authPage.loginPageHeading
      .should("be.visible")
      .and("have.text", "Please login");
  });

  it("login with valid credentials", () => {
    authPage.login(credentials.validEmail, credentials.validPassword);
    cy.url().should("not.include", "/login");
  });
});
