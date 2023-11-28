import { Module } from '@nestjs/common';
import { ProxyModule } from './../common/proxy/proxy.module';
import { DocumentoController } from './documento.controller';

@Module({
  imports: [ProxyModule],
  controllers: [DocumentoController],
})
export class DocumentoModule {}
