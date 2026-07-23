import type { Request, Response, NextFunction } from "express";
import { getExportData } from "../services/exportService.js";
import { sendSuccess } from "../utils/response.js";

export async function exportController(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const type = req.query.type as string;

    const data = await getExportData(type);

    sendSuccess(
      res,
      data,
      "Export data fetched successfully"
    );
  } catch (error) {
    next(error);
  }
}