import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ClientProxyCbm } from '../common/proxy/client-proxy';
import { SolicitudDTO } from './dto/solicitud.dto';
import { ISolicitud } from 'src/common/interfaces/solicitud_baja.interface';
import { SolicitudBajaMSG } from 'src/common/constants';
import { Observable } from 'rxjs';

@ApiTags('users')
@Controller('api/v2/user')
export class SolicitudController {
  constructor(private readonly clientProxy: ClientProxyCbm) {}
  private _clientProxySolicitud = this.clientProxy.clientProxySolicitud();

  @Post()
  create(@Body() solicitudDTO: SolicitudDTO): Observable<ISolicitud> {
    return this._clientProxySolicitud.send(SolicitudBajaMSG.CREATE, solicitudDTO);
  }

  @Get()
  findAll(): Observable<ISolicitud[]> {
    return this._clientProxySolicitud.send(SolicitudBajaMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<ISolicitud> {
    return this._clientProxySolicitud.send(SolicitudBajaMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() solicitudDTO: SolicitudDTO): Observable<ISolicitud> {
    return this._clientProxySolicitud.send(SolicitudBajaMSG.UPDATE, { id, solicitudDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxySolicitud.send(SolicitudBajaMSG.DELETE, id);
  }
}
