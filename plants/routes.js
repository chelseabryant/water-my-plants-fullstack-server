const { Router } = require("express")
const controller = require("./controller")

const router = Router()

router.get("/", controller.getAllPlants)

router.post("/add-plant", controller.addPlant)

router.delete("/remove-plant", controller.removePlant)

router.get("/get-my-plants", controller.getMyPlants)

router.get("/:id", controller.getPlantById)

module.exports = router
