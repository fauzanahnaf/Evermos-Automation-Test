describe('Feedback test', () => {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
    })

    it('should go to feedback page and validate url', () => {
        cy.get('form').should('be.visible')
        cy.get('#feedback').click()
        cy.url().should('include','feedback.html')
        
    })

    it('should fill feedback form', () => {
        cy.get('#name').type('Ojan')
        cy.get('#email').type('ojan@gmail.com')
        cy.get('#subject').type('Iya itu')
        cy.get('#comment').type('Apakah saya boleh bertanya?')
    })

    it('should submit feedback form', () => {
        cy.get('[value="Send Message"]').should('be.visible','exist')
        cy.get('[value="Send Message"]').click()
    })

    it('should display feedback message', () => {
        cy.get('#feedback-title').contains('Feedback')
        cy.url().should('include','sendFeedback.html')
    })
})