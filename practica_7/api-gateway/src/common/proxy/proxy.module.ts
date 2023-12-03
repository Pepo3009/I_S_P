import { Module } from '@nestjs/common';
import { ClientProxyCbm } from './client-proxy';

@Module({
  providers: [ClientProxyCbm],
  exports: [ClientProxyCbm],
})
export class ProxyModule {}
