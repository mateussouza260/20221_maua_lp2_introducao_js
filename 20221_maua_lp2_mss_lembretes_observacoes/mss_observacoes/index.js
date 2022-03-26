const express = require('express')
const app = express()
app.use(express.json())

// POST
// host:/pota:lembretes/123456/observacoes
app.post('/lembretes/123456/observacoes', (req, res) => {
    
})

// GET
app.get('/lembretes/123456/observacoes', (req, res) => {

})

app.listen (5000, () => {
    console.log('Lembretes. Porta 5000')
})