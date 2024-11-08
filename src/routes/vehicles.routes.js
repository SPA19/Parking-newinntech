import { Router } from "express";
import vehicleController from "../controllers/vehicles.controller.js";

const router = Router();

router.get("/allVehicles", vehicleController.getAllVehicles);

router.get("/vehicles/:id", vehicleController.getVehicleById);

router.get("/plateVehicles/:plate", vehicleController.getVehicleByPlate);

router.post("/createVehicles", vehicleController.createNewVehicle);

router.put("/updVehicles/:id", vehicleController.updateVehicle);

router.delete("/vehicles/:id", vehicleController.deleteVehicle);

export default router;