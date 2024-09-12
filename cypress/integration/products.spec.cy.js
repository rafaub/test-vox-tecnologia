class ProductPage {

  addProductToCart(number) {
    cy.get(`:nth-child(${number}) > .pricebar > .btn_primary`).click()
  }

  removeProductToCart(Child) {
    cy.get(Child ? `${Child}.item_pricebar > .btn_secondary` : `.item_pricebar > .btn_secondary`).click()
  }

  labelProducts() {
    cy.get('.product_label').should('contain', 'Products')
  }

  buttonContinueShopping() {
    cy.get('.btn_secondary').click()
  }

  labelLayersCounter() {
   return  cy.get('.fa-layers-counter')
  }

  buttonCart() {
    cy.get('#shopping_cart_container > a > svg').click()
  }

}

export default new ProductPage()
