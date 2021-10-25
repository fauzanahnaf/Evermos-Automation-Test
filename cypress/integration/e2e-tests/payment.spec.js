describe('Payment Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd
            cy.login(username,password)
    })
})

    it('should send new payment (faked)', () =>{
        cy.get('#pay_bills_tab').click()
        cy.contains('Pay Saved Payee').click()
        cy.get('#sp_payee').select('Apple')
        cy.get('#sp_payee').select('Bank of America')
        cy.get('#sp_account').select('Checking')
        cy.get('#sp_amount').type('5000')
        cy.get('#sp_date').type('13-04-2020 {enter}')
        cy.get('#sp_description').type('kuda lumping')
        cy.get('#pay_saved_payees').click()
    })

    it('should show success message', () =>{
        cy.get('#alert_content')
        .should('be.visible')
        .and('contain','The payment was successfully submitted.')
    })
})
