import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router();

// Quiz Selasa, 21 Juni 2022
// Relation Database
router.get(
  "/right-join",
  indexController.departmentsController.departmentsRightJoin
);

// Middleware Next
router.post(
  "/next",
  indexController.departmentsController.createDepartments,
  indexController.employeesController.createNextFromDepartments
);

// Quiz Jumat 17 Juni 2022
router.get("/", indexController.departmentsController.findAll);
router.get("/:department_id", indexController.departmentsController.findOne);
router.post("/", indexController.departmentsController.create);
router.put("/:department_id", indexController.departmentsController.update);
router.delete("/:department_id", indexController.departmentsController.deleted);
router.post("/sql", indexController.departmentsController.querySQL);

export default router;
