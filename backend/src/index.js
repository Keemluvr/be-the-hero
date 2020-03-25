const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

const port = 3333

app.use(cors({
    // origin: 
}))
app.use(express.json())
app.use(routes)

app.listen(port)
console.log('Rodando na porta', port)