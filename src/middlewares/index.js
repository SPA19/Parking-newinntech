const validateVehicle = (req, res, next) => {
  const { plate, type, entryTime } = req.body;

  //validación de tener placa y tipo
  if (!plate || !type) {
    return res.status(400).json({
      error: "Datos incompletos",
      message: "La placa y el tipo de vehículo son obligatorios",
    });
  }

  //validación de formato de placa
  if (plate.length < 4 || plate.length > 7) {
    console.log(plate.length >= 4 && plate.length <= 7);
    return res.status(400).json({
      error: "Placa inválida",
      message: "La placa debe tener entre 4 y 7 caracteres",
    });
  }

  //validación de tipo de vehiculo en este caso carro o moto
  if (type !== "car" && type !== "motorcycle") {
    return res.status(400).json({
      error: "Tipo inválido",
      message: "El tipo debe ser car o motorcycle",
    });
  }

  const entryDate = new Date(entryTime || Date.now());
  const currentDate = new Date();

  //validación de que si sea un formato fecha
  if (isNaN(entryDate.getTime())) {
    return res.status(400).json({
      error: "Fecha inválida",
      message: "La fecha de entrada no es válida",
    });
  }
  //validacion de que no sea una fecha adelantada
  if (entryDate > currentDate) {
    return res.status(400).json({
      error: "Fecha inválida",
      message: "La fecha de entrada no puede ser futura",
    });
  }
  req.body.entryTime = entryDate;

  next();
};

export default validateVehicle;
