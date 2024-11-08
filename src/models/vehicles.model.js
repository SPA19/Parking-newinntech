import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  plate: {
    type: String,
    required: [true, "La placa es obligatoria"],
    uppercase: true,
    trim: true,
    minlength: [6, "La placa debe tener al menos 6 caracteres"],
    maxlength: [6, "La placa debe tener máximo 6 caracteres"],
  },
  type: {
    type: String,
    required: [true, "El tipo de vehículo es obligatorio"],
    enum: {
      values: ["car", "motorcycle"],
      message: "El tipo debe ser car o motorcycle",
    },
  },
  entryTime: {
    type: Date,
    required: [true, "La hora de entrada es obligatoria"],
    default: Date.now,
  },
  exitTime: {
    type: Date,
  },
});

export default mongoose.model("Vehicle", vehicleSchema);
