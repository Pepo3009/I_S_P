import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { SolicitudController } from './solicitud.controller';

@Module({
  imports: [ProxyModule],
  controllers: [SolicitudController],
})
export class SolicitudModule {}
