describe ('Third Test', () => {
    it ('End to End test', () => {  
      cy.visit ('/');
      cy.contains('Search').click()
      cy.get('#search-input').type ('Atlanta').type ('{enter}')
      cy.get(':nth-child(3) > :nth-child(1) > .brewery-name').click()
    });
  });