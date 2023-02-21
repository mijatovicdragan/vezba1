/// <reference types="Cypress" />

import { registerPage } from "../page_objects/registerPage";
import { faker } from "@faker-js/faker";

describe("Register test", () => {
  let userData = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(8),
  };

  before("visit app and click on the register link", () => {
    cy.visit("/");
    registerPage.registerLink.click();
    cy.url().should("contain", "/register");
  });

  it("Register with valid data", () => {
    registerPage.registerWithValidData(
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.password
    );
    cy.get("a[href='/register']").should("not.exist");
  });
});
