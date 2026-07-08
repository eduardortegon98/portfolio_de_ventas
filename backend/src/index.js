import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

const startServer = () => {
  const server = app.listen(PORT, () => {
    console.info(
      `API server listening on port ${PORT} (${NODE_ENV})`
    );
  });

  server.on("error", (error) => {
    console.error("Server startup error:", error);
    process.exit(1);
  });
};

startServer();