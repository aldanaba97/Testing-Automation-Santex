// // describe('Test_user_problem', {testIsolation :false },() => {
   
// //  it('Visitar la pagina', () => {
        
// //         cy.visit('https://www.saucedemo.com')
// //      })
    
// //     it('test login', () => {
// //         cy.get('input[placeholder="Username"]').clear().type("problem_user"); 
// //         cy.get('#password').clear().type("secret_sauce");
// //         cy.get("#login-button").click(); 
        
// //     });
     
// //     it('test agregar ', () => {
// //         cy.get('#item_4_title_link').click(); 


// //     });
// //     it('Verificar la visualizacion de productos en el index ', () => {
// //         cy.get('img src="/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg"').should('be.visible')
// //         cy.get('#item_4_title_link').should('be.visible')
// //         cy.get('div').contains("carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.").should('be.visible')
// //         cy.get('div').contains("29.99").should('be.visible')
// //         cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible')
// //        });
   
// //     it('Verificar el filtro de orden en el index ', () => {
// //             cy.get('.product_sort_container').click().select("lohi")
            
// //     });
       
// //     it('Verificar Add to car', () => {
// //            cy.get('#item_4_title_link').click(); 
// //            cy.get(".shopping_cart_link").contains("1").should('be.visible');
// //            cy.get('#remove-test.allthethings()-t-shirt-(red)').should('be.visible')
   
// //     });
// //     it('Verificar Remove', () => {
// //            cy.get('#remove-test.allthethings()-t-shirt-(red)').click(); 
// //            cy.get(".shopping_cart_link").contains("").should('be.visible');
// //            cy.get('#item_4_title_link').should('be.visible'); 
           
// //     });
// //     it('Verificar Add to car', () => {
// //         cy.get('#item_4_title_link').click(); 
// //         cy.get(".shopping_cart_link").contains("1").should('be.visible');
// //         cy.get('#remove-test.allthethings()-t-shirt-(red)').should('be.visible')
   
// //    });
// //     it('Verificar item del carrito', () => {
// //         cy.get(".shopping_cart_link").click(); 
// //         cy.get("a href").contains("#item_3_title_link").should('be.visible')
   
        
// //     });
// //     it('Remover algun producto del carrito de compras ', () => {
// //         cy.get("#remove-test.allthethings()-t-shirt-(red)").click(); 
// //         cy.get("a href").contains("#item_3_title_link").should('not.be.visible')
   
        
// //     });    
    
// //     it('Boton "Checkout" no lleve a formulario s', () => {
// //         cy.get("#remove-test.allthethings()-t-shirt-(red)").click(); 
// //         cy.get("a href").contains("#item_3_title_link").should('not.be.visible')
         
// //        })
       
// //     /*it('test login with wrong password', () => {
// //         cy.get('h6').contains('Dashboard')
// //         cy.get('.oxd-userdropdown-tab').click();
// //         cy.get('.oxd-userdropdown-link').contains('Logout').click();
// //     });
// //     before('should visit the page', () => {
// //         cy.clearCookies();   
// //         cy.log('Puchuflito')
// //     });*/

// // });
// describe("Aplicando test circuito de compra para múltiples usuarios", { testIsolation: false }, () => {
//     beforeEach(() => {
//       cy.visit("https://www.saucedemo.com");
//     });
  
//     it("Probar el circuito de compra para cada usuario", () => {
//       // Cargar los usuarios desde el archivo fixture
//       cy.fixture("date").then((usuarios) => {
//         for (const usuario of usuarios) {
//           // Agrupamos pruebas para cada usuario
//           context(`Tests para el usuario: ${usuario.username}`, () => {
//             it("Login", () => {
//               cy.get('input[placeholder="Username"]').clear().type(usuario.username);
//               cy.get("#password").clear().type(usuario.password);
//               cy.get("#login-button").click();
//             });
  
//             it("Verificar visualización de productos en el index", () => {
//               cy.get(
//                 'img[src="/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg"]'
//               ).should("be.visible");
//               cy.get("#item_4_title_link").should("be.visible");
//             });
  
//             it("Agregar al carrito y finalizar compra", () => {
//               cy.get("#item_4_title_link").click();
//               cy.get("#add-to-cart").click();
//               cy.get(".shopping_cart_link").contains("1").should("be.visible");
//               cy.get("#checkout").click();
//               cy.get("#first-name").type("Aldana");
//               cy.get("#last-name").type("Banuera");
//               cy.get("#postal-code").type("5220");
//               cy.get("#continue").click();
//               cy.get("#finish").click();
//               cy.get("h2").contains("Thank you for your order!").should("be.visible");
//             });
  
//             it("Logout", () => {
//               cy.get("#react-burger-menu-btn").click();
//               cy.get("#logout_sidebar_link").click();
//             });
//           });
//         }
//       });
//     });
//   });