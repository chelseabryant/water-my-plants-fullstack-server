const bcrypt = require("bcryptjs")
const pool = require("../db")
const { CREATE_ACCOUNT } = require("./queries")
const {} = require("./queries")

const createAccount = (req, res) => {
  var salt = bcrypt.genSaltSync(10)
  var hash = bcrypt.hashSync(req.body.password, salt)
  pool.query(
    CREATE_ACCOUNT(req.body.name, req.body.email, hash),
    (error, results) => {
      if (error) throw error
      res.status(200).json(results.rows)
    }
  )
}

module.exports = { createAccount }
