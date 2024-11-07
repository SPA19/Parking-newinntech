import express from "express";
import morgan from "morgan";
import vehiclesRoutes from "./routes/vehicles.routes.js"

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api", vehiclesRoutes)

export default app;
