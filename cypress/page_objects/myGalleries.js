class MyGalleries {
  get myGalleriesHeading() {
    return cy.get("h1");
  }

  get myGalleriesLink() {
    return cy.get("a[href='/my-galleries']");
  }

  get searchInput() {
    return cy.get("input");
  }

  get filterButton() {
    return cy.get("button");
  }

  get firstGallery() {
    return cy.get(".grid").children().first();
  }

  get secondGallery() {
    return cy.get(".grid").children().eq(1);
  }

  get firstGalleryHeading() {
    return cy.get("h2").first();
  }

  get firstGalleryImage() {
    return cy.get("img").first();
  }

  get carousel() {
    return cy.get("#carousel");
  }

  get nextSlide() {
    return cy.get("span").last();
  }

  get textArea() {
    return cy.get("textarea");
  }

  get submitButton() {
    return cy.get("button").last();
  }

  search(searchText) {
    this.searchInput.type(searchText);
    this.filterButton.click();
  }
}

export const myGalleries = new MyGalleries();
