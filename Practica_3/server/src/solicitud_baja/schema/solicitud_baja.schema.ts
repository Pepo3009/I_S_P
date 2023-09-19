import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Departamento } from '../../departamento/schema/departamento.schema';
import { Documento } from '../../documento/schema/documento.schema';
import { Persona } from '../../persona/schema/persona.schema';
import { Proceso } from '../../proceso/schema/proceso.schema';
import { ProcesoDeterminado } from '../../proceso_determinado/schema/proceso_determinado.schema';


export type SolicitudBajaDocument = SolicitudBaja & Document;

@Schema()
export class SolicitudBaja {
    @Prop()
    name: string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref:  'Documento'})
    documento_id: Documento;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref:  'Proceso'})
    proceso_id: Proceso
}

export const SolicitudBajaSchema = SchemaFactory.createForClass(SolicitudBaja);