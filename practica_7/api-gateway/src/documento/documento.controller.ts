// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { DocumentoService } from './documento.service';
// import { CreateDocumentoDto } from './dto/create-documento.dto';
// import { UpdateDocumentoDto } from './dto/update-documento.dto';

// @Controller('documento')
// export class DocumentoController {
//   constructor(private readonly documentoService: DocumentoService) {}

//   @Post()
//   create(@Body() createDocumentoDto: CreateDocumentoDto) {
//     return this.documentoService.create(createDocumentoDto);
//   }

//   @Get()
//   findAll() {
//     return this.documentoService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.documentoService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateDocumentoDto: UpdateDocumentoDto) {
//     return this.documentoService.update(+id, updateDocumentoDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.documentoService.remove(+id);
//   }
// }

import { DocumentoMSG } from './../common/constants';
import { DocumentoDto } from './dto/documento.dto';
import { Observable } from 'rxjs';
import { ClientProxyCbm } from './../common/proxy/client-proxy';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { IDocumento } from 'src/common/interfaces/documento.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('documentos')
@Controller('api/v2/documentos')
export class DocumentoController {
  constructor(private readonly clientProxy: ClientProxyCbm) {}
  private _clientProxyDocumento = this.clientProxy.clientProxyDocumento();
  @Post()
  create(@Body() documentoDTO: DocumentoDto): Observable<IDocumento> {
    return this._clientProxyDocumento.send(DocumentoMSG.CREATE, documentoDTO);
  }

  @Get()
  findAll(): Observable<IDocumento[]> {
    return this._clientProxyDocumento.send(DocumentoMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IDocumento> {
    return this._clientProxyDocumento.send(DocumentoMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() documentoDTO: DocumentoDto,
  ): Observable<IDocumento> {
    return this._clientProxyDocumento.send(DocumentoMSG.UPDATE, {
      id,
      documentoDTO,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyDocumento.send(DocumentoMSG.DELETE, id);
  }
}
