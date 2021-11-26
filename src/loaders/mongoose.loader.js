const mongoose = require('mongoose')
const config = require('../config/config')

module.exports = async function() {
  await mongoose.connect(config.connection, { useNewUrlParser:true, useUnifiedTopology: true})
  console.log('Mongo connected')
}