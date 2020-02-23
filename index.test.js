const request = require('supertest'); //jebna client mel supertest
const server = require('./index');

describe('GET Endpoints', () => {
    it('Getting the /', async () => { 
        const res = await request(server).get('/') //ab3athelna elresultat cheb3eth request lel / bel methode get
        expect(res.statusCode).toEqual(200) //ken matraja3ch erreur tjawbek b status code 200 (fel http)
    })
})
server.close()