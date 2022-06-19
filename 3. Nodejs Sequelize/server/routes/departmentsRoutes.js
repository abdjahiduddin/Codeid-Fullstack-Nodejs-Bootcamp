import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router();

router.get("/", indexController.departmentsController.findAll);
router.get("/:department_id", indexController.departmentsController.findOne);
router.post("/", indexController.departmentsController.create);
router.put("/:department_id", indexController.departmentsController.update);
router.delete("/:department_id", indexController.departmentsController.deleted);
router.post("/sql", indexController.departmentsController.querySQL);

export default router;
