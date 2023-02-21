/// <reference types="Cypress" />

import { myGalleries } from "../page_objects/myGalleries";
import { authPage } from "../page_objects/loginPage";

const credentials = {
  email: "vivify77@test.com",
  password: "vivify77",
};

describe("my Gallery test", () => {
  beforeEach("visit app and login", () => {
    cy.visit("/login");
    authPage.login(credentials.email, credentials.password);
    cy.url().should("not.include", "/login");
    myGalleries.myGalleriesLink.click();
  });

  it("test heading", () => {
    myGalleries.myGalleriesHeading.should("contain", "My Galleries");
  });

  it("test galleries", () => {
    myGalleries.firstGallery.should("contain", "cupiditate");
    myGalleries.secondGallery.should("contain", "qwefasdf");
  });

  it("test single gallerie", () => {
    myGalleries.firstGalleryHeading.click();
    myGalleries.carousel.should("be.visible");
    myGalleries.firstGalleryImage.should("be.visible");
    myGalleries.nextSlide.should("be.visible").and("contain", "Next Slide");
    myGalleries.textArea.should("be.visible");
  });

  it("comment test", () => {
    myGalleries.firstGalleryHeading.click();
    myGalleries.textArea.type("Baloon!");
    myGalleries.submitButton.click();
  });

  it.only("search test", () => {
    cy.wait(1000);
    let searchText = "reiciendis";
    myGalleries.search(searchText);
    myGalleries.firstGallery.should("be.visible");
  });
});
