import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  plate: { type: String, required: true, unique: true },
  type: { type: String, required: true, enum: ["car", "motorcycle"] },
  entryTime: { type: Date, required: true },
  exitTime: { type: Date },
});

export default mongoose.model("Vehicle", vehicleSchema);
