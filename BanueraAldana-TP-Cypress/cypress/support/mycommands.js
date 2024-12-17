
Cypress.Commands.add('login', ([username, password]) => { 
    cy.get('#user-name').clear().type(username); 
   cy.get('#password').clear().type(password);
   cy.get("#login-button").click(); 
})

Cypress.Commands.add('Form', (type = 'valid') => { 
    cy.fixture('example').then((data) => {
        const formData = data[type]
        cy.get("#first-name").type(formData.name);
        cy.get("#last-name").type(formData.last_name);
        cy.get("#postal-code").type(formData.date_postal);
        cy.get("#continue").click();
})

})

