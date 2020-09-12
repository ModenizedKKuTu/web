import express from 'express'

const app = express()

app.all('/', (_req, res) => {
  res.status(200).end()
})

app.get('/hello', (_req, res) => {
  res.jsonp({ hello: true })
  res.end()
})

app.get('/test', (_req, res) => {
  res.jsonp({ test: true })
  res.end()
})

export default {
  path: '/api',
  handler: app
}
