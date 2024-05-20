import { it, beforeAll, afterAll, describe, expect } from 'vitest'
import supertest from 'supertest'
import { app } from '../src/app'

describe('Transactions routes', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a new transaction', async () => {
    await supertest(app.server)
      .post('/transactions')
      .send({
        title: 'new transaction',
        amount: 5000,
        type: 'credit',
      })
      .expect(201)
  })

  it('shoul be able to list all transactions', async () => {
    const createTransactionRespoonse = await supertest(app.server)
      .post('/transactions')
      .send({
        title: 'new transaction',
        amount: 5000,
        type: 'credit',
      })

    const cookies = createTransactionRespoonse.get('Set-Cookie') || []

    const getTrasactionsResponse = await supertest(app.server)
      .get('/transactions')
      .set('Cookie', cookies)

    expect(getTrasactionsResponse.body.transactions).toEqual([
      expect.objectContaining({
        title: 'new transaction',
        amount: 5000,
      }),
    ])
  })
})
