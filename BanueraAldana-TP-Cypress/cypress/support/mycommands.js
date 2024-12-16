
Cypress.Commands.add('login', ([username, password]) => { 
    cy.get('input[placeholder="Username"]').clear().type(username); 
   cy.get('#password').clear().type(password);
   cy.get("#login-button").click(); 
})


