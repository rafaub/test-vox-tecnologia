class LoginPage {
  visit() {
    cy.visit(Cypress.env('base-url'));
  }

  username(username) {
    if (username) {
      return cy.get('[data-test="username"]').type(username)
    }
  }

  password(password) {

    if (password) {
      return cy.get('[data-test="password"]').type(password)
    }
  
  }

  submit() {
    return cy.get('#login-button').click()
  }

  login(username, password) {
    this.username(username)
    this.password(password)
    this.submit()

  }
}

export default new LoginPage()
