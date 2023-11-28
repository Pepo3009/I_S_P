import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SolicitudModule } from './solicitud/user.module';
import { ProcesoModule } from './proceso/proceso.module';
import { DocumentoModule } from './documento/documento.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    SolicitudModule,
    ProcesoModule,
    DocumentoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
