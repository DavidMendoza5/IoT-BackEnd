const app = require('./app')
const config = require('./config/config')
const mongooseLoader = require('./loaders/mongoose.loader')

async function startServer() {
  try {
    await mongooseLoader()
    app.listen(config.port, () => {
      console.log(`Running on http://localhost:${config.port}`)
    })
  } catch(err) {
    console.log(err)
  }
}

startServer()