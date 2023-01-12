const { Router } = require("express")
const controller = require("./controller")

const router = Router()

router.get("/", controller.getAllPlants)

router.get("/:id", controller.getPlantById)

module.exports = router
