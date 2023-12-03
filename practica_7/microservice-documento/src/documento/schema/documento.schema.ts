import * as mongoose from 'mongoose';

export const DocumentoSchema = new mongoose.Schema(
  {
    principal: { type: String, required: true },
    recibido: { type: Boolean, required: true },
    persona_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'personas' }],
    proceso_determinado_id: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'procesodeterminados' },
    ],
  },
  { timestamps: true },
);
