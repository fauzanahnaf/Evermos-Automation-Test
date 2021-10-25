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

    it('should fill conversion form', () => {
        cy.contains('Pay Bills').click()
        cy.contains('Purchase Foreign Currency').click()
        cy.get('#pc_currency').select('Canada (dollar)')
        cy.get('[name="amount"]').type(5000)
        cy.get('#pc_inDollars_true').check()
        cy.get('[value="Calculate Costs"]').click()
    })

    it('should display conversion amount',() => {
        cy.get('#pc_conversion_amount')
        .should('contain','86281.28 baht (THB) = 3000.00 U.S. dollar (USD)')
    })
})
