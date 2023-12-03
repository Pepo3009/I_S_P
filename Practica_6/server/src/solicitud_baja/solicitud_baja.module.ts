import { Module } from '@nestjs/common';
import { SolicitudBajaService } from './solicitud_baja.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SolicitudBaja, SolicitudBajaSchema } from './schema/solicitud_baja.schema';
import { SolicitudBajaResolver } from './solicitud_baja.resolver';

@Module({
  providers: [SolicitudBajaResolver, SolicitudBajaService],
  imports: [
    MongooseModule.forFeature([
      {
        name: SolicitudBaja.name,
        schema: SolicitudBajaSchema,
      },
    ]),
  ],
  // controllers: [SolicitudBajaController],
  // providers: [SolicitudBajaService],
})
export class SolicitudBajaModule {}
