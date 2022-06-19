import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router();

router.get("/", indexController.locationsController.findAll);
router.get("/:location_id", indexController.locationsController.findOne);
router.post("/", indexController.locationsController.create);
router.put("/:location_id", indexController.locationsController.update);
router.delete("/:location_id", indexController.locationsController.deleted);
router.delete("/sql/:location_id", indexController.locationsController.querySQL);

export default router;
