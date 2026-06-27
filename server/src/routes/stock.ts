import { Router } from "express";
import { stockIn, stockOut } from "../controllers/stockController.js";

const stockRouter = Router();

stockRouter.post("/in", stockIn);

stockRouter.post("/out", stockOut);

export default stockRouter;
