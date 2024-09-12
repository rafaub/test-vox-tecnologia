import LoginPage from '../../integration/login.spec.cy'
import ProductPage from '../../integration/products.spec.cy'
import CheckoutPage from '../../integration/checkout.spec.cy'


describe('Checkout test', function () {
    beforeEach(() => {
        LoginPage.visit()
        LoginPage.login(Cypress.env('standard-user-name'), Cypress.env('password-user'))

        //produtos adicionadods 
        ProductPage.addProductToCart(1)
        ProductPage.addProductToCart(2)

        //acessa o carrinho
        ProductPage.buttonCart(1)
    })

    it('Finalize purchase', function () {

        //finaliza o carinho 
        CheckoutPage.buttonFinallyCheckout()

        //preenche dados cadastrais
        CheckoutPage.input("firstName", 'Rafaela')
        CheckoutPage.input("lastName", 'Uchoa')
        CheckoutPage.input("postalCode", '00000')

        //continuação para finalizar
        CheckoutPage.buttonContinueFinallyCheckout()

        //finalização da compra 
        CheckoutPage.buttonFinallyCheckout()

        //verifica se a compra oi aprovada
        CheckoutPage.labelSuccessFinallyOrder()
    })
})