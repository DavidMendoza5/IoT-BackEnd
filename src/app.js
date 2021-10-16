const express = require('express')
const cors = require('cors')

const routes = require('./routes/temperature.routes')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use('/v1', routes)

module.exports = app