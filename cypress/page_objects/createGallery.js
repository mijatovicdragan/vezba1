class CreateGallery {
  get createGalleryLink() {
    return cy.get(".nav-link").eq(2);
  }

  get heading() {
    return cy.get("h1");
  }

  get titleInput() {
    return cy.get("#title");
  }

  get descriptionInput() {
    return cy.get("#description");
  }

  get imagesInput() {
    return cy.get("input[type='url']");
  }

  get addImageButton() {
    return cy.get("button").eq(2);
  }

  get submitButton() {
    return cy.get("button").eq(3);
  }

  get imageUrlInputButtonUp() {
    return this.imagesInput.find("button").first();
  }

  get imageUrlInputButtonDown() {
    return this.imagesInput.find("button").last();
  }

  createGallery(title, description, imageUrl) {
    createGallery.titleInput.type(title),
      createGallery.descriptionInput.type(description),
      createGallery.imagesInput.type(imageUrl),
      createGallery.submitButton.click();
  }
}

export const createGallery = new CreateGallery();
