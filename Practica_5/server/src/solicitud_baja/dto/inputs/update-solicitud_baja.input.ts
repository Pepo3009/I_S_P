import { PartialType } from '@nestjs/swagger';
import { CreateSolicitudBajaInput } from './create-solicitud_baja.input';

export class UpdateSolicitudBajaInput extends PartialType(CreateSolicitudBajaInput) {}
