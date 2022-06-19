import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router();

router.get("/", indexController.countriesController.findAll);
router.get("/:country_id", indexController.countriesController.findOne);
router.post("/", indexController.countriesController.create);
router.put("/:country_id", indexController.countriesController.update);
router.delete("/:country_id", indexController.countriesController.deleted);
router.put("/sql/:country_id", indexController.countriesController.querySQL);

export default router;
