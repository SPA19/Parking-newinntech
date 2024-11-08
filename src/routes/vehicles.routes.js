import { Router } from "express";
import vehicleController from "../controllers/vehicles.controller.js";

const router = Router();

router.get("/allVehicles", vehicleController.getAllVehicle);

router.post("/createVehicles", vehicleController.createNewVehicle);

export default router;