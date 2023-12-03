import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    documento_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'documentos' }],
    proceso_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'procesos' }],
  },
  { timestamps: true },
);
