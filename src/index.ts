import express from 'express'

import config from './config'

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post('/', (req, res) => {
  console.log('POST', req.body)
  res.sendStatus(200)
})
app.get('/', (req, res) => {
  console.log('GET', req.body)
  res.sendStatus(200)
})

app.listen(config.PORT, async () => {
  console.log(`server is listening on http://localhost:${config.PORT}`)
})

export default app
