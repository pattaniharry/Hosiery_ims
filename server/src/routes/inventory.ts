import { Router } from "express";
import getInventoryData from "../controllers/inventoryController.js";

const inventoryRouter = Router();

inventoryRouter.get('/', getInventoryData);

export default inventoryRouter;