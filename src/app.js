import express from "express";
import cors from "cors";
import healthCheckRouter from "./routes/healthcheck.routes.js";

const app = express();

// Basic configuration
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
// CORS Config
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.get("/", (req, res) => {
  res.send("home page");
});
app.get("/instagram", (req, res) => {
  res.send("instagram page");
});
app.use("/api/v1", healthCheckRouter);

export default app;
