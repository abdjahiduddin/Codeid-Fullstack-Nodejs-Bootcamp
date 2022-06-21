import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router();

// Quiz Selasa, 21 Juni 2022
// Relation Database
router.get(
  "/departments/inner-join",
  indexController.employeesController.employeesDepartmentsInnerJoin
);

// Middleware Next
router.post(
  "/next",
  indexController.employeesController.createEmployees,
  indexController.dependentsController.createNext
);

// Quiz Jumat 17 Juni 2022
router.get("/", indexController.employeesController.findAll);
router.get("/:employee_id", indexController.employeesController.findOne);
router.post("/", indexController.employeesController.create);
router.put("/:employee_id", indexController.employeesController.update);
router.delete("/:employee_id", indexController.employeesController.deleted);
router.get("/sql/:employee_id", indexController.employeesController.querySQL);

export default router;
