import { faker } from "@faker-js/faker"

describe('demoblaze test', () => {

  const username = faker.person.firstName() + faker.finance.routingNumber()
  const password = "Password1234"

  const login = () =>{
    cy.get('#login2').click({force:true})
    cy.get('#loginusername').type(username,{timeout:3000,focus:true,force:true})
    cy.get('#loginpassword').type(password,{focus:true,force:true})
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({force:true})
    cy.get('#nameofuser',{timeout:4000}).should('have.text',`Welcome ${username}`)
  
  }

  beforeEach(()=>{
    cy.visit('https://www.demoblaze.com/')
  })  



  it('sign up / registro', () => {
    cy.get('#signin2').click({force:true})
    cy.get('#sign-username').type(username,{timeout:3000,focus:true,force:true})
    cy.get('#sign-password').type(password,{focus:true,force:true})
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({force:true})
    cy.wait(2000)
    cy.on('window:alert',(t)=>{
      expect(t).to.contains('Sign up successful.');
   })
  })

  it('login ',()=>{
    login()
  })

  it('compra de celular',()=>{
    login()
    //agregar celular
    cy.get(`[onclick="byCat('phone')"]`).click({force:true})
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click({force:true})
    cy.get('.col-sm-12 > .btn').click({force:true})
    cy.get('#cartur').click({force:true})
    cy.get('.col-lg-1 > .btn').click({force:true})

    //formulario compra

    cy.get('#name').type(faker.person.fullName(),{focus:true,force:true})
    cy.get('#country').type(faker.location.country())
    cy.get('#city').type(faker.location.city())
    cy.get('#card').type(faker.finance.creditCardNumber('visa'))
    cy.get('#month').type(faker.date.month())
    cy.get('#year').type("2024")
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({force:true})
    cy.wait(3000)
    cy.get('.sweet-alert > h2').should('have.text','Thank you for your purchase!')
    cy.get('.confirm').click({force:true})
  })
})