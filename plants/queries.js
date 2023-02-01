const GET_ALL_PLANTS = `
SELECT * FROM full_plant;
`

const GET_PLANT_BY_ID = (id) => `
SELECT * FROM full_plant
WHERE id = ${id}
`

const ADD_PLANT = (user, plant) => `
INSERT INTO my_plants (user_id, plant_id)
VALUES ('${user}', '${plant}')
RETURNING *
`

const GET_ADDED_PLANTS = (user, plant) => `
SELECT * FROM my_plants
WHERE user_id = ${user} AND plant_id = ${plant}
`

const REMOVE_PLANT = (user, plant) => `
DELETE FROM my_plants
WHERE user_id = ${user} AND plant_id = ${plant}
`

const GET_MY_PLANTS = (user) => `
SELECT full_plant.id, full_plant.name, full_plant.image
FROM my_plants
INNER JOIN full_plant
ON my_plants.plant_id = full_plant.id
WHERE my_plants.user_id = ${user}
`

module.exports = {
  GET_ALL_PLANTS,
  GET_PLANT_BY_ID,
  ADD_PLANT,
  GET_ADDED_PLANTS,
  REMOVE_PLANT,
  GET_MY_PLANTS,
}
