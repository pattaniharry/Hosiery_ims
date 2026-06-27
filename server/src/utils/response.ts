import type { Response } from "express";
import type { ApiResponse } from "../types/dashboard.types.js";

export const sendSuccess = <T>(
  res: Response,
  data: T,
  message = "Request processed successfully",
  statusCode = 200
): void => {
  const response: ApiResponse<T> = {
    success: true,
    message,
    data,
  };
  res.status(statusCode).json(response);
};
