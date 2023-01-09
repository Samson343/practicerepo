const express = require('express')
const app = express()

app.get("/", function (req, res) {
    res.send("hello world!")
})

const PORT = 1337

app.listen(PORT)