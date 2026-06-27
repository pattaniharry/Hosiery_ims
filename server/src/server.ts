import "dotenv/config";
import app from "./app.js";
import prisma from "./utils/db.js";

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`[Server] Running on http://localhost:${PORT} in ${process.env.NODE_ENV || "development"} mode`);
});

// Graceful shutdown
const gracefulShutdown = async () => {
  console.log("[Server] Shutting down gracefully...");
  server.close(async () => {
    console.log("[Server] HTTP server closed.");
    try {
      await prisma.$disconnect();
      console.log("[Server] Database connection closed.");
    } catch (dbErr) {
      console.error("[Server] Error during database disconnect:", dbErr);
    }
    process.exit(0);
  });

  // Force exit after 10s if connections persist
  setTimeout(() => {
    console.error("[Server] Forcefully shutting down...");
    process.exit(1);
  }, 10000);
};

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);
