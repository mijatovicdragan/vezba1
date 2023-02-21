/// <reference types="Cypress" />

import { allGalleries } from "../page_objects/allGalleries";
import { authPage } from "../page_objects/loginPage";

const credentials = {
  email: "vivify77@test.com",
  password: "vivify77",
};

describe("all galleries page test", () => {
  beforeEach("visit app and login", () => {
    cy.visit("/login");
    authPage.login(credentials.email, credentials.password);
    cy.url().should("not.include", "/login");
  });

  it("test heading", () => {
    allGalleries.headingTitle.should("have.text", "All Galleries");
  });

  it("pagination test", () => {
    allGalleries.allGalleries.should("be.visible").and("have.length", 10);
    allGalleries.loadMoreButton.click();
    allGalleries.allGalleries.should("be.visible").and("have.length", 20);
    allGalleries.loadMoreButton.click();
    allGalleries.allGalleries.should("be.visible").and("have.length", 30);
  });

  it("search test", () => {
    let searchTherm = "Dragan";

    allGalleries.search(searchTherm);
    allGalleries.allGalleries.should("be.visible").and("have.length", 4);
  });

  it("click on gallery title redirects to single gallery page", () => {
    allGalleries.singleGalleryHeading.click();
    allGalleries.singleGallery.should("be.visible");
    allGalleries.createdByHeading.should("contain", "created by");
  });
});
