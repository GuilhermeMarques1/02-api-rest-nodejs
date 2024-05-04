import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const test = await knex('sqlite_schema').select('*')

  console.log(test)

  return test
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Http server is running')
  })
