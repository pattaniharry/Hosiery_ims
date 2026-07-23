import { Router } from "express";
import { reportController } from "../controllers/reportsController.js";
import { exportController } from "../controllers/exportController.js";

const reportRouter = Router();

reportRouter.get('/', reportController);
reportRouter.get('/export', exportController);

export default reportRouter;