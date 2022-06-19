import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router();

router.get("/", indexController.jobsController.findAll);
router.get("/:job_id", indexController.jobsController.findOne);
router.post("/", indexController.jobsController.create);
router.put("/:job_id", indexController.jobsController.update);
router.delete("/:job_id", indexController.jobsController.deleted);
router.get("/sql/:job_id", indexController.jobsController.querySQL);

export default router;
