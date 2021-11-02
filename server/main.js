const express = require('express')
const path = require('path')

const app = express()

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"))
})

app.get('/css', function(req, res) {
    res.sendFile(path.join(__dirname, '../styles.css'))
})

app.get('/js', function(req, res) {
    res.sendFile(path.join(__dirname, '../script.js' ))
})

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`port ${port} is running!`))