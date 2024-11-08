import express from "express";
import morgan from "morgan";
import vehiclesRoutes from "./routes/vehicles.routes.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.config.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api", vehiclesRoutes);

export default app;
