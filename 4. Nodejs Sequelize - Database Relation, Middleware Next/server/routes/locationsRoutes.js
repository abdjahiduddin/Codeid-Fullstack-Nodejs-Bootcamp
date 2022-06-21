import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router();

// Quiz Selasa, 21 Juni 2022
// Relation Database
router.get("/all", indexController.locationsController.locationsAll)

// Middleware Next
router.post("/next", indexController.locationsController.createLocations, indexController.departmentsController.createNext)

// Quiz Jumat 17 Juni 2022
router.get("/", indexController.locationsController.findAll);
router.get("/:location_id", indexController.locationsController.findOne);
router.post("/", indexController.locationsController.create);
router.put("/:location_id", indexController.locationsController.update);
router.delete("/:location_id", indexController.locationsController.deleted);
router.delete("/sql/:location_id", indexController.locationsController.querySQL);

export default router;
