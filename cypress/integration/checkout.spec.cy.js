class CheckoutPage {

    buttonFinallyCheckout() {
        cy.get('.btn_action').click()
    }

    buttonContinueFinallyCheckout() {
        cy.get('.btn_primary').click()
    }

    input(id, text) {
      return  cy.get(`[data-test=${id}]`).type(text)
    }
  
  

    labelSuccessFinallyOrder() {
        cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER')
    }
  
  
  }
  
  export default new CheckoutPage()