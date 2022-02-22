const app = require('../server')
const supertest = require('supertest')
const request = supertest(app)

it('Gets the test endpoint', async () => {
    const response = await request.get('/')

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body.data)).toBe(true)
})