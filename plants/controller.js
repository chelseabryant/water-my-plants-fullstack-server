const pool = require("../db")
const {
  GET_ALL_PLANTS,
  GET_PLANT_BY_ID,
  ADD_PLANT,
  GET_ADDED_PLANTS,
  REMOVE_PLANT,
  GET_MY_PLANTS,
} = require("./queries")

const getAllPlants = (req, res) => {
  pool.query(GET_ALL_PLANTS, (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

const getPlantById = (req, res) => {
  if (req.query.user_id) {
    pool.query(GET_PLANT_BY_ID(req.params.id), (error, results) => {
      if (error) throw error
      pool.query(
        GET_ADDED_PLANTS(req.query.user_id, results.rows[0].id),
        (insideError, insideResults) => {
          if (insideError) throw insideError
          if (insideResults.rows.length) {
            res
              .status(200)
              .json({ plant_details: results.rows, added_plant: true })
          } else {
            res
              .status(200)
              .json({ plant_details: results.rows, added_plant: false })
          }
        }
      )
    })
  } else {
    pool.query(GET_PLANT_BY_ID(req.params.id), (error, results) => {
      if (error) throw error
      res.status(200).json({ plant_details: results.rows, added_plant: false })
    })
  }
}

const addPlant = (req, res) => {
  pool.query(ADD_PLANT(req.body.user, req.body.plant), (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows[0])
  })
}

const removePlant = (req, res) => {
  pool.query(REMOVE_PLANT(req.body.user, req.body.plant), (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows[0])
  })
}

const getMyPlants = (req, res) => {
  pool.query(GET_MY_PLANTS(req.query.user_id), (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

module.exports = {
  getAllPlants,
  getPlantById,
  addPlant,
  removePlant,
  getMyPlants,
}
