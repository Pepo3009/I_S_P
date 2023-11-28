import * as mongoose from 'mongoose';

export const ProcesoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    // email: { type: String, required: true },
  },
  { timestamps: true },
);

// ProcesoSchema.index({ email: 1 }, { unique: true });
