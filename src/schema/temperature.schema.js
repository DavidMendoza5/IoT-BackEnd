const mongoose = require('mongoose')

const { Schema, model } = mongoose

const TemperatureSchema = Schema({
  Temp: {
    type: Number
  },
  Hum: {
    type: Number
  }
},
{
  timestamps: true
})

module.exports = model('temperature', TemperatureSchema)