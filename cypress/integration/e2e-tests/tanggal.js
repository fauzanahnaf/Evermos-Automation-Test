describe('Tanggal', () => {
    before(function() {
        cy.visit('https://d-webapp.truckking.id/')
        cy.get('[name="email"]').type('kudaa@gmail.com')
        cy.get('[name="password"]').type('12345678')
        cy.contains('Log In').click()
    })

    it('Manage Order', () => {
        cy.contains('Manage Order').click()
        cy.get('[placeholder="Pilih Tanggal"]').type('15-February-1997 {enter}')
        cy.get('.order-search-date-img').click()
    })
})