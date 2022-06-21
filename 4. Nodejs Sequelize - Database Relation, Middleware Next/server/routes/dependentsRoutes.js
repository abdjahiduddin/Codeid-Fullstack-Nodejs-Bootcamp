import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router();

// Quiz Selasa, 21 Juni 2022
// Relation Database
router.get(
  "/inner-join",
  indexController.dependentsController.dependentsInnerJoin
);

// Quiz Jumat 17 Juni 2022
router.get("/", indexController.dependentsController.findAll);
router.get("/:dependent_id", indexController.dependentsController.findOne);
router.post("/", indexController.dependentsController.create);
router.put("/:dependent_id", indexController.dependentsController.update);
router.delete("/:dependent_id", indexController.dependentsController.deleted);
router.get("/sql/:dependent_id", indexController.dependentsController.querySQL);

export default router;
