
 const usuarios = require("../../cypress/fixtures/date.json")

 describe("Test Saudemo", { testIsolation: false }, () => {
   
  it("Login con datos vacios", () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').should('be.empty');
    cy.get('#password').should('be.empty');
    cy.get("#login-button").click();
    cy.wait(5000); 
    cy.get('.error-message-container').should("be.visible"); 
  } )


  usuarios.forEach(usuario => {
   
  it(`Login con ${usuario.username}`, () => {
    cy.visit('https://www.saucedemo.com');
    cy.clearCookies()
    cy.get('#user-name').type(usuario.username); 
    cy.get('#password').type(usuario.password);
    cy.get("#login-button").click(); 
  });

  it("Verificar la visualizacion de productos en el index ", () => {

    cy.get(
      'img[src="/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg"]'
    ).should("be.visible");
    cy.get("#item_4_title_link").should("be.visible");
    cy.get("div")
      .contains(
        "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."
      )
      .should("be.visible");
    cy.get("div").contains("29.99").should("be.visible");
 
        cy.get("#add-to-cart-sauce-labs-backpack").should("be.visible");
      
    });
    
  

  it("Verificar el filtro de orden en el index ", () => {
    cy.get(".product_sort_container").select("lohi");
    cy.get('.inventory_item').eq(0).should('contain.text', 'Sauce Labs Onesie')
    cy.get('.inventory_item').eq(1).should('contain.text', 'Sauce Labs Bike Light')
    cy.get('.inventory_item').eq(2).should('contain.text', 'Sauce Labs Bolt T-Shirt')
    cy.get('.inventory_item').eq(3).should('contain.text', 'Test.allTheThings() T-Shirt (Red)')
    cy.get('.inventory_item').eq(4).should('contain.text', 'Sauce Labs Backpack')
    cy.get('.inventory_item').eq(5).should('contain.text', 'Sauce Labs Fleece Jacket')
  });

  it("Verificar Add to car", () => {
    cy.get("#item_4_title_link").click();
    cy.get("#add-to-cart").click();
    cy.get(".shopping_cart_link").contains("1").should("be.visible");
    cy.get("#remove").should("be.visible");
  });
  it("Verificar Remove", () => {
    cy.get("#remove").click();
    cy.get(".shopping_cart_link").should("be.visible");
    cy.get("#add-to-cart").should("be.visible");
  });
  it("Verificar Add to car desde index", () => {
    cy.get('#back-to-products').click(); 
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get(".shopping_cart_link").contains("1").should("be.visible");
    cy.get("#remove-sauce-labs-backpack").should("be.visible");
    cy.get("#remove-sauce-labs-backpack").click();
    cy.wait(1000)
    cy.get("#add-to-cart-sauce-labs-backpack").click();
  });
  it("Verificar item del carrito", () => {
    cy.get(".shopping_cart_link").click();
    cy.get("#item_4_title_link").should("be.visible");
  });
  it("Remover algun producto del carrito de compras ", () => {
    cy.get("#remove-sauce-labs-backpack").click();
  });
   it("Verificar boton Checkout sin elementos", () => {
      cy.get("#checkout").click(); 
      cy.get('.error-message-container').should("be.exist"); 
      cy.get('.error-message-container').should("be.not.visible"); 
   })

  it('Boton "Checkout" lleve a formulario s', () => {
    cy.get("#cancel").click();
    cy.get("#continue-shopping").click();
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get(".shopping_cart_link").contains("1").should("be.visible");
    cy.get("#remove-sauce-labs-backpack").should("be.visible");
    cy.get(".shopping_cart_link").click();
    cy.get(".shopping_cart_link").click();
    cy.get("#item_4_title_link").should("be.visible");
    cy.get("#checkout").click();
  });
  it("Formulario", () => {
    cy.get("#first-name").type("Aldana");
    cy.get("#last-name").type("Banuera");
    cy.get("#postal-code").type("5220");
    cy.get("#continue").click();
  });
  it("Finalizar correctamente la compra", () => {
    cy.get("#finish").click();
    cy.get("h2").contains("Thank you for your order!").should("be.visible");
    cy.get("#back-to-products").click();
  });
  it("Logout", () => {
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").click();
    cy.wait(5000)
  });
  })
});

 

