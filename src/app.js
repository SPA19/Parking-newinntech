import express from "express";
import morgan from "morgan";
import vehiclesRoutes from "./routes/vehicles.routes.js";
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "./config/swagger.config.js";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();
const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use(morgan("dev"));
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/api", vehiclesRoutes);

export default app;
