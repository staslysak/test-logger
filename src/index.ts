import express from 'express'

import config from './config'

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post('/', (req, res) => {
  console.log('---POST---')
  console.log('params', JSON.stringify(req.params, null, 2))
  console.log('query', JSON.stringify(req.query, null, 2))
  console.log('body', JSON.stringify(req.body, null, 2))
  
  res.sendStatus(200)
})
app.get('/', (req, res) => {
  console.log('---GET---')
  console.log('params', JSON.stringify(req.params, null, 2))
  console.log('query', JSON.stringify(req.query, null, 2))
  console.log('body', JSON.stringify(req.body, null, 2))
 
  res.sendStatus(200)
})

app.listen(config.PORT, async () => {
  console.log(`server is listening on http://localhost:${config.PORT}`)
})

export default app
