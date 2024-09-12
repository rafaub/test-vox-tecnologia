import LoginPage from '../../integration/login.spec.cy'
import ProductPage from '../../integration/products.spec.cy'

describe('login teste', function () {
  it('Login with valid user', function () {
    LoginPage.visit()
    LoginPage.login(Cypress.env('standard-user-name'), Cypress.env('password-user'))
    ProductPage.labelProducts()
  })

  it('User tries to log in with blocked account', function () {
    LoginPage.visit()
    LoginPage.login(Cypress.env('locked-out-user-name'), Cypress.env('password-user'))
    LoginPage.labelTextError().should('contain', 'Epic sadface: Sorry, this user has been locked out')
  })

  it('Invalid login', function () {
    LoginPage.visit()
    LoginPage.login('teste', Cypress.env('password-user'))
    LoginPage.labelTextError().should('contain', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Username is required', function () {
    LoginPage.visit()
    LoginPage.login('', Cypress.env('password-user'))
    LoginPage.labelTextError().should('contain', 'Epic sadface: Username is required')
  })

  it('Username is required', function () {
    LoginPage.visit()
    LoginPage.login(Cypress.env('problem-user-name'), '')
    LoginPage.labelTextError().should('contain', 'Epic sadface: Password is required')
  })
})
