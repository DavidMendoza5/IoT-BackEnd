const temperatureService = require('../services/temperature.service')

const getTemperature = async (req, res, next) => {
  try {
    let data = await temperatureService.getTemperatureService()
    res.status(200).send({data, message: 'Data saved'})
  } catch(err) {
    res.status(500).send(err.message)
  }
}

const getTemperatureFromDb = async (req, res, next) => {
  try {
    let data = await temperatureService.getTemperatureFromDbService()
    res.status(200).send(data)
  } catch(err) {
    res.status(500).send(err.message)
  }
}

const activateRele = async (req, res, next) => {
  try {
    const response = await temperatureService.activateReleService(req.body)
    res.status(200).send(response)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  getTemperature,
  getTemperatureFromDb,
  activateRele
}