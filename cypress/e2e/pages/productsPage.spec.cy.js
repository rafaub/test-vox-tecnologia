import LoginPage from '../../integration/login.spec.cy'
import ProductPage from '../../integration/products.spec.cy'


describe('Test cart', function () {
    it('User adds a product to the cart and a product to the cart', function () {
        LoginPage.visit()
        LoginPage.login(Cypress.env('standard-user-name'), Cypress.env('password-user'))

        //Adição de produtos
        ProductPage.addProductToCart(1)
        ProductPage.addProductToCart(2)
        ProductPage.labelLayersCounter().should('contain', '2')

        //click no carrinho
        ProductPage.buttonCart()

        //remoção do produto
        ProductPage.removeProductToCart(`:nth-child(3) > .cart_item_label >`)
        ProductPage.removeProductToCart()
        ProductPage.labelLayersCounter().should('not.exist')

        //Click em continuar comprando
        ProductPage.buttonContinueShopping()
        ProductPage.labelProducts()
    })
})