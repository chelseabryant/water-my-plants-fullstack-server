const pool = require("../db")
const { GET_ALL_PLANTS, GET_PLANT_BY_ID } = require("./queries")

const getAllPlants = (req, res) => {
  pool.query(GET_ALL_PLANTS, (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

const getPlantById = (req, res) => {
  pool.query(GET_PLANT_BY_ID(req.params.id), (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

module.exports = {
  getAllPlants,
  getPlantById,
}
