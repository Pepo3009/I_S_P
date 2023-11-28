export interface IDocumento extends Document {
  principal: string;
  recibido: boolean;
  persona_id: string;
  proceso_determinado_id: string;
}
