import Vehicle from "../models/vehicles.model.js";

const vehicleController = {
  getAllVehicles: async (req, res) => {
    try {
      const response = await Vehicle.find();
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getVehicleById: async (req, res) => {
    try {
      const response = await Vehicle.findById(req.params.id);
      if (!response)
        return res.status(404).json({ message: "Vehiculo no encontrado" });
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getVehicleByPlate: async (req, res) => {
    try {
      const { plate } = req.params;
      const response = await Vehicle.find({ plate });

      if (response.length === 0)
        return res.status(404).json({
          message: `Vehículo con placa ${plate} no fue encontrado`,
        });
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  createNewVehicle: async (req, res) => {
    try {
      const { plate, type, user_name, user_id, entryTime } = req.body;
      //validar si la placa ya esta registrada y el vehiculo sigue en el parqueadero
      const existingPlate = await Vehicle.findOne({
        plate,
        exitTime: { $exists: false },
      });

      if (existingPlate) {
        return res.status(400).json({
          message: `El vehiculo con placa ${plate} se encuentra todavia en el parqueadero`,
        });
      }
      //cuenta el numero de carros que hay en el momento teniendo en cuenta que no tenga hora de salida
      const existingCars = await Vehicle.countDocuments({
        type: "car",
        exitTime: { $exists: false },
      });
      //cuenta la cantidad de motos que hay en el momento teniendo en cuenta que no tenga hora de salida
      const existingMotorcycles = await Vehicle.countDocuments({
        type: "motorcycle",
        exitTime: { $exists: false },
      });

      //antes de registrar el carro verifica la disponibilidad que es 5
      if (type === "car" && existingCars >= 3) {
        return res
          .status(400)
          .json({ message: "No hay cupo de estacionamiento para tu carro" });
      }

      if (
        type === "motorcycle" &&
        existingCars >= 1 &&
        existingMotorcycles >= 1
      ) {
        return res
          .status(400)
          .json({
            message:
              "No puede ingresar dos motos al mismo tiempo, teniendo un carro",
          });
      }

      //antes de registrar la moto verifica la disponibilidad que es de 10
      if (type === "motorcycle" && existingMotorcycles >= 2) {
        return res
          .status(400)
          .json({ message: "No hay cupo de estacionamiento para tu moto" });
      }

      const vehicle = new Vehicle({
        plate,
        type,
        user_name,
        user_id,
        entryTime,
      });
      await vehicle.save();
      res
        .status(201)
        .json({ message: "Se ha creado correctamente", data: vehicle });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  updateVehicle: async (req, res) => {
    const currentDate = new Date();
    const response = await Vehicle.findByIdAndUpdate(
      req.params.id,
      { exitTime: currentDate },
      {
        new: true,
      }
    );
    if (!response)
      return res.status(404).json({ message: "Vehiculo no encontrado" });

    res.status(200).json({
      message: "Hora de salida registrada correctamente",
      data: response,
    });
  },

  deleteVehicle: async (req, res) => {
    const response = await Vehicle.findByIdAndDelete(req.params.id);
    if (!response)
      return res.status(404).json({ message: "Vehiculo no encontrado" });

    res.status(200).json({
      message: "Se elimino correctamente",
      data: response,
    });
  },
};

export default vehicleController;
