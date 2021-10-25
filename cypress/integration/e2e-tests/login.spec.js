describe('Login/Logout test ', () => {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
        cy.get('#signin_button').should('be.visible')
        cy.get('#signin_button').click()  
    })

    it('should try login with invalid data', () => {
        // cy.url().should('include','login.html')
        // cy.get('#user_login').type('Anak kucing')
        // cy.get('#user_password').type('password')
        // cy.get('#user_remember_me').should('be.visible')
        // cy.get('#user_remember_me').check()
        // cy.get('[value="Sign in"]').should('be.enabled')
        // cy.get('[value="Sign in"]').click()
        cy.login('invalid username', 'invalid password')
    })

    it('should display error message', () => {
        cy.url().should('include','login_error=true')
        cy.get('[class="alert alert-error"]')
        .should('be.visible')
        .and('contain', 'Login and/or password are wrong.')
    })

    it('should login to application', () => {
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd

            cy.login(username,password)
            // cy.get('#user_login').type(user.id)
            // cy.get('#user_password').type(user.pwd)
            // cy.get('#user_remember_me').check()
            // cy.contains('Sign in').click()
        })

        cy.get('ul.nav-tabs').should('be.visible')
        
    })

    it('should logout from application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.url().should('include','index.html')
    })
})