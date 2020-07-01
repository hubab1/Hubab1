describe('Welcome', () => {
    it('Visits welcome', () => {
        cy.visit('/1')

        cy.url().should('contain', 'welcome')

        cy.contains('Start Application').click()

        cy.url().should('contain', 'terms')

        cy.contains('Nestio Terms of Service')

        cy.contains('Agree and Continue').click()
    });
});
