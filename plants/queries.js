const GET_ALL_PLANTS = `
SELECT * FROM full_plant;
`

const GET_PLANT_BY_ID = (id) => `
SELECT * FROM full_plant
WHERE id = ${id}
`

module.exports = {
  GET_ALL_PLANTS,
  GET_PLANT_BY_ID,
}
