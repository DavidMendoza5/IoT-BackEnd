const axios = require('axios')
const config = require('../config/config')
const temperatureRepository = require('../repository/temperature.repository')
const TemperatureSchema = require('../schema/temperature.schema')

const getTemperatureService = async ()  => {
  try {
    let temperature = await axios.get(config.raspberry_host)
    let new_temperature = await temperatureRepository.saveData(TemperatureSchema, temperature.data)
    return new_temperature
  } catch(err) {
    throw new Error('Error saving data')
  }
}

const getTemperatureFromDbService = async () => {
  let data = await temperatureRepository.getData(TemperatureSchema)
  return data
}

const activateReleService = async (command) => {
  try {
    const response = await axios.post(config.raspberry_host+'rele', command)
    return response.data
  } catch(err) {
    throw new Error('Error activating rele')
  }
}

module.exports = {
  getTemperatureService,
  getTemperatureFromDbService,
  activateReleService
}