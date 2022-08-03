const express = require('express')
const path = require('path')

const PORT = process.env.port || 8080

const app = express()

app.use(express.static(__dirname))
app.use(express.static(path.resolve(__dirname, 'dist')))

app.get('*', (req) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT)