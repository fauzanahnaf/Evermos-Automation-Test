describe('Password Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    it('should click on signin button', () => {
        cy.get('#signin_button').should('be.visible')
        cy.get('#signin_button').click()
    })

    it('should click on the forgotten password', () =>{
        cy.contains('Forgot your password ?').should('exist')
        cy.contains('Forgot your password ?').click()
    })

    it('should fill email form', () =>{
        cy.get('#user_email').type('fauzanahnaf23@gmail.com')
    })

    it('should submit the form', () => {
        cy.get('[value="Send Password"]').click()
    })
})