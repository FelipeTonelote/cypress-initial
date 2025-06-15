/// <reference types ="cypress"/>

import { faker } from '@faker-js/faker'

describe('Cadastro de usuário', () => {

    beforeEach('Acessar cadastro de usuário', () => {
        cy.acessarCadastroUsuario()
    })

    it('Campo Nome vazio', () => {
        cy.ClicarCadastrar()
        cy.validarMensagemErro('O campo nome deve ser prenchido')
    });

    it('Campo E-mail vazio', () => {
        cy.preencheNome(faker.person.fullName())
        cy.ClicarCadastrar()
        cy.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    });

    it('Campo E-mail inválido', () => {
        cy.preencheNome(faker.person.fullName())
        cy.preencheEmail(faker.person.firstName())
        cy.ClicarCadastrar()
        cy.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    });

    it('Campo Senha vazio', () => {
        cy.preencheNome(faker.person.fullName())
        cy.preencheEmail(faker.internet.email())
        cy.ClicarCadastrar()
        cy.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    });

    it('Campo Senha inválido', () => {
        cy.preencheNome(faker.person.fullName())
        cy.preencheEmail(faker.internet.email())
        cy.preencheSenha('123')
        cy.ClicarCadastrar()
        cy.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    });

    
    it('Cadastro com sucesso', async () => {

        const name = await faker.person.fullName()

        cy.preencheNome(name)
        cy.preencheEmail(faker.internet.email())
        cy.preencheSenha('123456')
        cy.ClicarCadastrar()
        cy.validarMensagemSucesso(name)
    });

})