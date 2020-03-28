const app = require('./app')

const port = process.event.PORT || 3333

app.listen(port)
console.log('Rodando na porta', port)