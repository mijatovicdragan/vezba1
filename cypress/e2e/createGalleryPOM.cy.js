/// <reference types="Cypress" />

import { createGallery } from "../page_objects/createGallery";
import { authPage } from "../page_objects/loginPage";
import { faker } from "@faker-js/faker";

let credentials = {
  email: "vivify77@test.com",
  password: "vivify77",
};

let galleryData = {
  title: faker.lorem.word(10),
  description: faker.lorem.sentence(1),
  imageUrl: "https://ik.imagekit.io/ikmedia/backlit.jpg",
};

describe("Create Gallery test", () => {
  before("visit app, log in and click create gallery", () => {
    cy.visit("/login");
    authPage.login(credentials.email, credentials.password);
    cy.url().should("not.include", "/login");
  });

  it("create gallery", () => {
    createGallery.createGalleryLink.click();
    createGallery.createGallery(
      galleryData.title,
      galleryData.description,
      galleryData.imageUrl
    );
  });
});
