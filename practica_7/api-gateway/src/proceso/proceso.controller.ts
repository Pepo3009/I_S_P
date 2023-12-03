import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProcesoMSG } from '../common/constants';
import { ProcesoDTO } from './dto/proceso.dto';
import { IProceso } from 'src/common/interfaces/proceso.interface';
import { ApiTags } from '@nestjs/swagger';
import { ClientProxyCbm } from 'src/common/proxy/client-proxy';
import { Observable } from 'rxjs';
// import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
// import { UseGuards } from '@nestjs/common';

@ApiTags('procesos')
// @UseGuards(JwtAuthGuard)
@Controller('api/v2/proceso')
export class ProcesoController {
  constructor(private readonly clientProxy: ClientProxyCbm) {}
  private _clientProxyProceso = this.clientProxy.clientProxyProceso();

  @Post()
  create(@Body() procesoDTO: ProcesoDTO): Observable<IProceso> {
    return this._clientProxyProceso.send(ProcesoMSG.CREATE, procesoDTO);
  }

  @Get()
  findAll(): Observable<IProceso[]> {
    return this._clientProxyProceso.send(ProcesoMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IProceso> {
    return this._clientProxyProceso.send(ProcesoMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() passengerDTO: ProcesoDTO,
  ): Observable<IProceso> {
    return this._clientProxyProceso.send(ProcesoMSG.UPDATE, {
      id,
      passengerDTO,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyProceso.send(ProcesoMSG.DELETE, id);
  }
}
