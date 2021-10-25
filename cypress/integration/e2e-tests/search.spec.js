describe('Searchbox Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    
    it('should type into searchbox and submit with pressing enter', () => {
        cy.get('#searchTerm').type('Aku siapa {enter}')
    })

    it('should show search result page', () => {
        cy.get('h2').contains('Search Results:')
    })
})