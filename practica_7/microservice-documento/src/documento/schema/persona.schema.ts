import * as mongoose from 'mongoose';

export const PersonaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  CI: { type: String, required: true },
});
