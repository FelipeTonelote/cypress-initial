/// <reference types ="cypress"/>

Cypress.Commands.add('clicarLogin', () => {
    cy.get('#btnLogin')
        .click()
})

Cypress.Commands.add('validarMensagemErroInput', (message) => {
    cy.get('.invalid_input')
        .should('have.text', (message))
})

Cypress.Commands.add('preencheEmailLogin', (email) => {
    cy.get('#user')
        .type(email)
})

Cypress.Commands.add('preencheSenhaLogin', (password) =>  {
    cy.get('#password')
        .type(password)
})

Cypress.Commands.add('validarMensagemSucessoLogin', (email) =>  {
    cy.get('#swal2-title')
        .should('have.text', 'Login realizado')
    
    cy.get('#swal2-html-container')
        .should('have.text', `Olá, ${email}`)
})