const Pool = require("pg").Pool

const pool = new Pool({
  user: "chelsmbryant",
  host: "db.bit.io",
  database: "chelsmbryant/water_my_plants", // public database
  password: process.env.DB_PASSWORD, // key from bit.io database page connect menu
  port: 5432,
  ssl: true,
  connectionString: process.env.DB_CONNECTION_STRING,
})

module.exports = pool
