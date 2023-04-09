import fastify from 'fastify'
// import crypto from 'node:crypto'
// import { knex } from './database'
import cookie from '@fastify/cookie'
import { transactionsRoutes } from './routes/transactions'
// Caso dê erro de lint para subir no git, usar comando => git config --global core.autocrlf false

export const app = fastify()

app.register(cookie)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})
