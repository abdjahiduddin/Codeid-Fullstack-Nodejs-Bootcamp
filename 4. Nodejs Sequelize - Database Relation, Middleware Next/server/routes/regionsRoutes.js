import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router();

// Quiz Selasa, 21 Juni 2022
// Relation Database
router.get("/left-join", indexController.regionsController.regionsLeftJoin);

// Middleware Next
router.post("/next", indexController.regionsController.createRegions, indexController.countriesController.createNext)

// Quiz Jumat 17 Juni 2022
router.get("/", indexController.regionsController.findAll);
router.get("/:id", indexController.regionsController.findOne);
router.post("/", indexController.regionsController.create);
router.put("/:id", indexController.regionsController.update);
router.delete("/:id", indexController.regionsController.deleted);
router.get("/sql/:id", indexController.regionsController.querySQL);

export default router;
