import Vehicle from "../models/vehicles.model.js";

const vehicleController = {
  getAllVehicle: async (req, res) => {
    try {
      const vehicle = await Vehicle.find();
      res.status(200).json(vehicle);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  createNewVehicle: async (req, res) => {
    const { plate, type, entryTime } = req.body;
    try {
      //validar si la placa ya esta registrada y el vehiculo sigue en el parqueadero
      const existingPlate = await Vehicle.findOne({
        plate,
        exitTime: { $exists: false },
      });

      if (existingPlate) {
        return res
          .status(400)
          .json({ message: `El vehiculo con placa ${plate} se encuentra todavia en el parqueadero`});
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
      if (type === "car" && existingCars >= 5) {
        return res
          .status(400)
          .json({ message: "No hay cupo de estacionamiento para tu carro" });
      }
      //antes de registrar la moto verifica la disponibilidad que es de 10
      if (type === "motorcycle" && existingMotorcycles >= 10) {
        return res
          .status(400)
          .json({ message: "No hay cupo de estacionamiento para tu moto" });
      }

      const vehicle = new Vehicle({ plate, type, entryTime });
      await vehicle.save();
      res
        .status(201)
        .json({ message: "Se ha creado correctamente", data: vehicle });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

export default vehicleController;
