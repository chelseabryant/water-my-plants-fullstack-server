const { Router } = require("express")
const controller = require("./controller")

const router = Router()

router.get("/", controller.getAllPlants)

router.post("/add_plant", controller.addPlant)

router.delete("/remove_plant", controller.removePlant)

router.get("/:id", controller.getPlantById)

module.exports = router
