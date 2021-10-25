describe('New Payee Test', () => {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
        cy.get('#signin_button').click()

        cy.fixture('user.json').then(user => {
            const username = user.id
            const password = user.pwd

            cy.login(username,password)
        // cy.get('#user_login').type(username)
        // cy.get('#user_password').type(password)
        // cy.get('#user_remember_me').check()
        // cy.contains('Sign in').click()
        
        })
    })

    it('should add new payee to the list', () => {
        cy.get('#pay_bills_tab').should('be.visible')
        cy.get('#pay_bills_tab').click()
        cy.contains('Add New Payee').should('exist')
        cy.contains('Add New Payee').click()
        cy.get('#np_new_payee_name').type('Aku anak kuda')
        cy.get('#np_new_payee_address').type('Alamatku')
        cy.get('#np_new_payee_account').type('152719')
        cy.get('#np_new_payee_details').type('2812882')
        cy.get('#add_new_payee').should('be.visible')
        cy.get('#add_new_payee').click()

    })

    it('should show success message', () => {
        cy.get('#alert_content')
        .should('be.visible')
        .and('contain','The new payee Aku anak kuda was successfully created.')
    })
})