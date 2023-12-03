import * as mongoose from 'mongoose';

export const ProcesoDeterminadoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  proceso_id: { type: String, required: true }, //talvez tenga que referenciar type: mongoose.Schema.Types.ObjectId, ref: 'Proceso'
  flujo_proceso_id: { type: String, required: true }, //talvez tenga que referenciar type: mongoose.Schema.Types.ObjectId, ref: 'FlujoProceso'
});
