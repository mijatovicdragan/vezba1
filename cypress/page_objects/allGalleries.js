class AllGalleries {
  get headingTitle() {
    return cy.get("h1");
  }

  get searchInput() {
    return cy.get("input");
  }

  get filterButton() {
    return cy.get("button").first();
  }

  get loadMoreButton() {
    return cy.get("button").last();
  }

  get allGalleries() {
    return cy.get(".grid").children();
  }

  get singleGallery() {
    return cy.get(".cell").first();
  }

  get singleGalleryHeading() {
    return this.singleGallery.find("h2");
  }

  get createdByHeading() {
    return cy.get("h5").first();
  }

  search(searchTherm) {
    this.searchInput.type(searchTherm);
    this.filterButton.click();
  }
}

export const allGalleries = new AllGalleries();
