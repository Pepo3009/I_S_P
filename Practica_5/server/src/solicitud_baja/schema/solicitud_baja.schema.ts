import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Documento } from 'src/documento/schema/documento.schema';
import { Proceso } from 'src/proceso/schema/proceso.schema';


export type SolicitudBajaDocument = SolicitudBaja & Document;

@Schema()
export class SolicitudBaja {
    @Prop()
    name: string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref:  'documentos'})
    documento_id: Documento;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref:  'procesos'})
    proceso_id: Proceso
}

export const SolicitudBajaSchema = SchemaFactory.createForClass(SolicitudBaja);