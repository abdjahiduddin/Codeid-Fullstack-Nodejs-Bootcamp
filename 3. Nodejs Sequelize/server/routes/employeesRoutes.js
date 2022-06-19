import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router();

router.get("/", indexController.employeesController.findAll);
router.get("/:employee_id", indexController.employeesController.findOne);
router.post("/", indexController.employeesController.create);
router.put("/:employee_id", indexController.employeesController.update);
router.delete("/:employee_id", indexController.employeesController.deleted);
router.get("/sql/:employee_id", indexController.employeesController.querySQL);

export default router;
