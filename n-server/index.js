const app = require('express')
const express = express()

app.get('/', (req, res) => {
    res.send('hola')
})

app.listen(3000, () => {
    console.log('listening')
})