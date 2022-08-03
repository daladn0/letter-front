const express = require('express')
const port = process.env.PORT || 8080

const app = require()

app.use(express.static(__dirname, 'dist'))

app.listen(port, () => {
    console.log(`front listening on port ${port}`)
})