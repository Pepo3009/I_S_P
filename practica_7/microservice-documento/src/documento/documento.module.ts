// import { Module } from '@nestjs/common';
// import { DocumentoService } from './documento.service';
// import { DocumentoController } from './documento.controller';

// @Module({
//   controllers: [DocumentoController],
//   providers: [DocumentoService],
// })
// export class DocumentoModule {}
import {
  DOCUMENTO,
  PERSONA,
  PROCESODETERMINADO,
} from './../common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { DocumentoController } from './documento.controller';
import { DocumentoService } from './documento.service';
import { DocumentoSchema } from './schema/documento.schema';
import { PersonaSchema } from './schema/persona.schema';
import { ProcesoDeterminadoSchema } from './schema/procesoDeterminado.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: DOCUMENTO.name,
        useFactory: () =>
          DocumentoSchema.plugin(require('mongoose-autopopulate')),
      },
      {
        name: PERSONA.name,
        useFactory: () => PersonaSchema,
      },
      {
        name: PROCESODETERMINADO.name,
        useFactory: () => ProcesoDeterminadoSchema,
      },
    ]),
  ],
  controllers: [DocumentoController],
  providers: [DocumentoService],
})
export class DocumentoModule {}
