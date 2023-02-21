class RegisterPage {
  get registerLink() {
    return cy.get("a[href='/register']");
  }

  get firstNameInput() {
    return cy.get("#first-name");
  }

  get lastNameInput() {
    return cy.get("#last-name");
  }

  get emailInput() {
    return cy.get("#email");
  }

  get passwordInput() {
    return cy.get("#password");
  }

  get confirmedPasswordInput() {
    return cy.get("#password-confirmation");
  }

  get checkbox() {
    return cy.get("input[type='checkbox']");
  }

  get submitButton() {
    return cy.get("button");
  }

  get heading() {
    return cy.get("h1");
  }

  registerWithValidData(firstName, lastName, email, password) {
    this.firstNameInput.type(firstName);
    this.lastNameInput.type(lastName);
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.confirmedPasswordInput.type(password);
    this.checkbox.check();
    this.submitButton.click();
  }
}

export const registerPage = new RegisterPage();
