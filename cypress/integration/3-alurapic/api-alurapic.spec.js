describe('Buscar fotos e dados', () => {
    it('buscar fotos do Flavio', () => {
        cy.request({
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos'
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('Farol iluminado')
        })
    })

    it('fazer login do Flavio', () => {
        cy.request({
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',
            body: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')
            expect(res.body.id).to.be.equal(1)
            expect(res.body).to.have.property('email')
            expect(res.body.email).to.be.equal('flavio@alurapic.com.br')
        })
    })

})

// ### testes com dados sensíveis:
//vai usar num arquivo externo 
//variavel de ambiente
//cria arquivo cypress.env.json
//coloca lá dentro os dados sensíveis
//dentro do request, referencia no 
//body o arquivo Cypress.env()
//dentro do then((res)) coloca as 
//propriedades de acordo com
//as informações do DevTools
//como as informações são sensíveis, 
//incluir no arquivo .gitignore 
//o arquivo cypress.env.json
//além disso é possível fazer mocks, 
//para simular dados ao invés de usar
//os dados reais