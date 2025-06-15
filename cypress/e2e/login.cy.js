/// <reference types ="cypress"/>

import { faker } from '@faker-js/faker'


describe('Login', () => {

    beforeEach('Acessar página de login', () => {
        cy.acessarLoginUsuario()
    })

    it('Campo email vazio', () => {
        cy.clicarLogin()
        cy.validarMensagemErroInput('E-mail inválido.')
    });

    it('Campo email inválido', () => {
        cy.preencheEmailLogin(faker.person.firstName())
        cy.clicarLogin()
        cy.validarMensagemErroInput('E-mail inválido.')
    });

    it('Campo Senha vazio', () => {
        cy.preencheEmailLogin(faker.internet.email())
        cy.clicarLogin()
        cy.validarMensagemErroInput('Senha inválida.')
    });
    
    it('Campo Senha inválido', () => {
        cy.preencheEmailLogin(faker.internet.email())
        cy.preencheSenhaLogin('123')
        cy.clicarLogin()
        cy.validarMensagemErroInput('Senha inválida.')
    });

    it('Login com sucesso', async () => {

        const email = await faker.internet.email()

        cy.preencheEmailLogin(email)
        cy.preencheSenhaLogin('123456')
        cy.clicarLogin()
        cy.validarMensagemSucessoLogin(email)
    });

    it('Login com sucesso e checkbox', async () => {

        const email = await faker.internet.email()

        cy.preencheEmailLogin(email)
        cy.preencheSenhaLogin('123456')
        cy.get('#materialUnchecked')
            .check()
        cy.clicarLogin()
        cy.validarMensagemSucessoLogin(email)
    });
    
})