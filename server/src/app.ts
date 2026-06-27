import express from "express";
import cors from "cors";
import dashboardRouter from "./routes/dashboard.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import inventoryRouter from "./routes/inventory.js";
import stockRouter from "./routes/stock.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/dashboard", dashboardRouter);
app.use("/api/inventory", inventoryRouter);
app.use("/api/stock", stockRouter);

app.use(errorHandler);

export default app;