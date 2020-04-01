const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async() => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async() =>{
        const response = await request(app)
        .post('/ongs')
        //.set('Authorization', '3a142686') // Enviar o HEADER
        .send({
            "name": "LBV2",
            "email": "teste2@teste.com",
            "whatsapp": "21999999999",
            "city": "Rio de Janeiro",
            "uf": "RJ"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});

