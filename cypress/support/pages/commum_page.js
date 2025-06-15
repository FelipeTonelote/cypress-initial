/// <reference types ="cypress"/>

Cypress.Commands.add('acessarCadastroUsuario', () => {
    cy.visit('/')
        .get('#top_header')

    cy.get('.fa-lock')
        .click()
})

Cypress.Commands.add('acessarLoginUsuario', () => {
    cy.visit('/')
        .get('#top_header')

    cy.get('.fa-user')
        .click()
})