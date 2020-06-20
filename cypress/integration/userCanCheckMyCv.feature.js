describe('User can see list of projects', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3003');
      cy.get('#Cv-tab').click();
    })
    it('displays work', () => {
        cy.get('#cv-1').within(() => {
          cy.get(('.image')).should('exist');
          cy.get('.ui.header').should('contain', 'Insurance specialist, April 2018 - May 2020');
          cy.get('.description').should('contain', 'Insurance specialist with focus on');
        })
      });
    
      it('displays latest job ', () => {
        cy.get('#cv-2').within(() => {
          cy.get(('.image')).should('exist');
          cy.get('.ui.header').should('contain', 'Insurance Advisor, October 2015 - April 2018');
          cy.get('.description').should('contain', 'Insurance Advisor for Ifs branded car insurances.');
        })
      });
      it('displays job', () => {
        cy.get('#cv-3').within(() => {
          cy.get(('.image')).should('exist');
          cy.get('.ui.header').should('contain', 'Timberland, May 2011 - October 2015');
          cy.get('.description').should('contain', 'Sales at Timberland flagship store.');
        })
      });
})