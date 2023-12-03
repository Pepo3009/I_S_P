import { IDocumento } from "./documento.interface";
import { IProceso } from "./proceso.interface";

export interface ISolicitud extends Document {
  name: string;
  documento_id: IProceso[];
  proceso_id: IDocumento[];
}
