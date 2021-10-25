describe ('Evermos Login', () => {
    it ('Input Username dan password', () => {
        cy.visit('https://evermos.com/home')
        cy.url().should('include','evermos.com/home')
        cy.get('.masuk').should('be.visible')
        cy.get('.masuk').click()
        cy.get('[placeholder="Nomor Telepon Anda"]').type('6281223334444')
        cy.get('[placeholder="Kata Sandi Anda"]').type('password')
        cy.get('.inputText__inner > a > i > span').click()
        cy.get('[type="checkbox"]').click()
        cy.get('[type="checkbox"]').should('be.visible')
        cy.get('[type="button"]').click()
    })
})