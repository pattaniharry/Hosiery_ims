import type { Request, Response, NextFunction } from "express";
import { sendSuccess } from "../utils/response.js";
import { getDashboardData as getDashboardDataService } from "../services/dashboardService.js";

export default async function getDashboardData(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const dashboardData = await getDashboardDataService();

    sendSuccess(res, dashboardData, "Dashboard data fetched successfully");
  } catch (error) {
    next(error);
  }
}
