import { Module } from '@nestjs/common';
import { PROCESO } from '../common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { ProcesoController } from './passenger.controller';
import { ProcesoService } from './proceso.service';
import { ProcesoSchema } from './schema/proceso.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PROCESO.name,
        useFactory: () => ProcesoSchema,
      },
    ]),
  ],
  controllers: [ProcesoController],
  providers: [ProcesoService],
})
export class ProcesoModule {}
