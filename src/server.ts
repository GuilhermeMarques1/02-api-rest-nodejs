import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions'
import { env } from './env'
import cookie from '@fastify/cookie'

const app = fastify()

app.register(cookie)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Http server is running on port: ', env.PORT)
  })
