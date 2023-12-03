import { MongooseModule } from '@nestjs/mongoose';
import { ProcesoModule } from './proceso/proceso.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.URI_MONGODB),
    ProcesoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
