import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router();

router.get("/", indexController.regionsController.findAll);
router.get("/:id", indexController.regionsController.findOne);
router.post("/", indexController.regionsController.create);
router.put("/:id", indexController.regionsController.update);
router.delete("/:id", indexController.regionsController.deleted);
router.get("/sql/:id", indexController.regionsController.querySQL);

export default router;
