import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router();

// Quiz Selasa, 21 Juni 2022
// Relation Database
router.get("/left-join", indexController.countriesController.countriesLeftJoin)

// Middleware Next
router.post("/next", indexController.countriesController.createCountries, indexController.locationsController.createNext)

// Quiz Jumat 17 Juni 2022
router.get("/", indexController.countriesController.findAll);
router.get("/:country_id", indexController.countriesController.findOne);
router.post("/", indexController.countriesController.create);
router.put("/:country_id", indexController.countriesController.update);
router.delete("/:country_id", indexController.countriesController.deleted);
router.put("/sql/:country_id", indexController.countriesController.querySQL);

export default router;
