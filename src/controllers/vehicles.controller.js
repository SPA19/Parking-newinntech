const vehicleController = {
  getVehicle: async (req, res) => {
    try {
      const vehicle = { hola: "estoy funcionando desde el controlador" };
      res.status(200).json(vehicle);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

export default vehicleController;
