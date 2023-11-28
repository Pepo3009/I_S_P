import { Module } from '@nestjs/common';
import { ProcesoController } from './proceso.controller';
import { ProxyModule } from '../common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [ProcesoController],
})
export class ProcesoModule {}
