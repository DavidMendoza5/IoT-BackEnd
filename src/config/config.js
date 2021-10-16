
require('dotenv').config()

const config = {
    port: process.env.PORT,
    connection: process.env.DB_CONNECTION,
    host: `http://${process.env.HOST}:${process.env.PORT}/`,
    raspberry_host: `http://${process.env.RASPBERRY_IP}:${process.env.RASPBERRY_PORT}/`
}

module.exports = config;