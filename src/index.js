const mongoose = require('mongoose')

const app = require('./app')
const config = require('./config/config')

mongoose.connect(config.connection, { useNewUrlParser:true, useUnifiedTopology: true}, (err, res) => {
  if(err) {
    throw err
  } else {
    console.log('Mongo connected')
    app.listen(config.port, () => {
        console.log(`Running on http://localhost:${config.port}`)
    })
  }
})