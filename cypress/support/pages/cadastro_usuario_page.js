/// <reference types ="cypress"/>

Cypress.Commands.add('ClicarCadastrar', () => {
    cy.get('#btnRegister')
        .click()
})

Cypress.Commands.add('validarMensagemErro', (message) => {
    cy.get('.errorLabel')
        .then((element) => {
            expect(element).to.be.visible
            expect(element.text()).eq(message)
        })
})

Cypress.Commands.add('preencheNome', (name) => {
    cy.get('#user')
        .type(name)
})

Cypress.Commands.add('preencheEmail', (email) => {
    cy.get('#email')
        .type(email)
})

Cypress.Commands.add('preencheSenha', (password) => {
    cy.get('#password')
        .type(password)
})

Cypress.Commands.add('validarMensagemSucesso', (name) => {
    cy.get('#swal2-title')
        .then((element) => {
            expect(element).to.be.visible
            expect(element.text()).eq('Cadastro realizado!')
        })
    
    cy.get('#swal2-html-container')
        .should('be.visible')
        .should('have.text', `Bem-vindo ${name}`)
})
