import { Router } from "express";
import vehicleController from "../controllers/vehicles.controller.js";

const router = Router();

router.get("/viewAll", vehicleController.getVehicle);

export default router;