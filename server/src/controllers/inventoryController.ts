import type { Request, Response, NextFunction } from "express";
import { sendSuccess } from "../utils/response.js";
import { getInventoryData as getInventoryDataService } from "../services/inventoryService.js";

export default async function getInventoryData(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> {

    try {
        const inventory = await getInventoryDataService(req.query);

        sendSuccess(
            res,
            inventory,
            inventory.pagination.totalItems === 0 ? "Inventory is empty" : "Inventory fetched successfully"
        );
    } catch (error) {
        next(error);
    }
}
