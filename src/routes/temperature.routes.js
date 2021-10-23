const express = require('express')

const temperatureController = require('../controllers/temperature.controller')

const api = express.Router()

api.get('/temperature', temperatureController.getTemperature)
api.get('/temperature/data', temperatureController.getTemperatureFromDb)
api.post('/temperature', temperatureController.activateRele)

module.exports = api