describe('My First Test google verify', function () {
    it('Navigates to google.com and verify title', function () { 
       cy.visit('https://www.google.com'); 
       cy.title().should('eq', 'Google'); 
       cy.get('.gLFyf').type('cypress')
       cy.get('.FPdoLc > center > .gNO89b').click({force:true})

    }) 
})
