import { Router } from "express";
import vehicleController from "../controllers/vehicles.controller.js";
import validateVehicle from "../middlewares/index.js";


const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Vehicles:
 *       type: object
 *       required:
 *         - plate
 *         - type
 *         - entryTime
 *       properties:
 *         plate:
 *           type: string
 *           description: Placa del vehículo
 *           example: ABC123
 *         type:
 *           type: string
 *           enum: [car, motorcycle]
 *           description: Tipo de vehículo
 *           example: car
 *         entryTime:
 *           type: string
 *           format: date-time
 *           description: Hora de entrada
 *           example: 2024-11-08T18:25:59.679Z
 *         exitTime:
 *           type: string
 *           format: date-time
 *           description: Hora de salida
 *   responses:
 *     BadRequest:
 *       description: Datos inválidos en la petición
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               error:
 *                 type: string
 *                 example: "Bad Request"
 *               message:
 *                 type: string
 *                 example: "Los datos proporcionados no cumplen con los requisitos."
 *     NotFound:
 *       description: Recurso no encontrado
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               error:
 *                 type: string
 *                 example: "Not Found"
 *               message:
 *                 type: string
 *                 example: "El recurso solicitado no se encontró en el servidor."
 */

/**
 * @swagger
 * tags:
 *   name: Vehicles
 *   description: Endpoints para gestión de vehiculos
 */

/**
 * @swagger
 * /api/allVehicles:
 *   get:
 *     summary: Obtener todos los vehículos
 *     tags: [Vehicles]
 *     responses:
 *       200:
 *         description: Lista de vehículos recuperada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vehicles'
 */
router.get("/allVehicles", vehicleController.getAllVehicles);

/**
 * @swagger
 * /api/vehicles/{id}:
 *   get:
 *     summary: Obtener vehículo por ID
 *     tags: [Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del vehículo
 *     responses:
 *       200:
 *         description: Vehículo recuperado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehicles'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */

router.get("/vehicles/:id", vehicleController.getVehicleById);


/**
 * @swagger
 * /api/plateVehicles/{plate}:
 *   get:
 *     summary: Obtener vehículo por placa
 *     tags: [Vehicles]
 *     parameters:
 *       - in: path
 *         name: plate
 *         required: true
 *         schema:
 *           type: string
 *         description: Placa del vehículo
 *     responses:
 *       200:
 *         description: Vehículo recuperado por placa correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehicles'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.get("/plateVehicles/:plate", vehicleController.getVehicleByPlate);

/**
 * @swagger
 * /api/createVehicles:
 *   post:
 *     summary: Crear un nuevo vehículo
 *     tags: [Vehicles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vehicles'
 *     responses:
 *       201:
 *         description: Vehículo creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehicles'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 */
router.post(
  "/createVehicles",
  validateVehicle,
  vehicleController.createNewVehicle
);

/**
 * @swagger
 * /api/updVehicles/{id}:
 *   put:
 *     summary: Actualizar hora de salida de un vehículo
 *     tags: [Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del vehículo
 *     responses:
 *       200:
 *         description: Vehículo actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehicles'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.put("/updVehicles/:id", vehicleController.updateVehicle);

/**
 * @swagger
 * /api/vehicles/{id}:
 *   delete:
 *     summary: Eliminar un vehículo
 *     tags: [Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del vehículo
 *     responses:
 *       200:
 *         description: Vehículo eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehicles'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.delete("/vehicles/:id", vehicleController.deleteVehicle);

export default router;
