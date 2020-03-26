describe ('Second Test', () => {
    it ('Visit the app, Click Search, and Type preset value, Return home', () => {
      const text = 'Atlanta'  
      cy.visit ('/');
      cy.contains('Search').click()
      cy.get('#search-input').type (text).should ('have.value', text);
      cy.contains('Home').click()
    });
  });