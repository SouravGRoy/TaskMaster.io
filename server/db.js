const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
    user: process.env.USERNAME,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    port: process.env.DBPORT,
    database: 'todoapp'

})


module.exports = pool