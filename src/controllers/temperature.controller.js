const axios = require('axios')
const TemperatureSchema = require('../schema/temperature.schema')
const config = require('../config/config')

require('dotenv').config()

const getTemperature = async (req, res, next) => {
  try {
    let temperature = await axios.get(config.raspberry_host)

    data = new TemperatureSchema(temperature.data)

    await data.save()
    
    res.status(200).send(temperature.data)
  } catch(err) {
    res.status(500).send(err.message)
  }
}

const getTemperatureFromDb = async (req, res, next) => {
  try {
    let data = await TemperatureSchema.find()
    res.status(200).send(data)
  } catch(err) {
    res.status(500).send(err.message)
  }
}

const activateRele = async (req, res, next) => {
  try {
    const response = await axios.post(config.raspberry_host+'rele', req.body)
    res.status(200).send(response.data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  getTemperature,
  getTemperatureFromDb,
  activateRele
}