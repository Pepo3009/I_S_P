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
import { MessagePattern, Payload } from '@nestjs/microservices';
import { DocumentoDTO } from './dto/documento.dto';
import { DocumentoService } from './documento.service';
import { Controller } from '@nestjs/common';
import { DocumentoMSG } from 'src/common/constants';

@Controller()
export class DocumentoController {
  constructor(private readonly documentoService: DocumentoService) {}

  @MessagePattern(DocumentoMSG.CREATE)
  create(@Payload() documentoDTO: DocumentoDTO) {
    return this.documentoService.create(documentoDTO);
  }

  @MessagePattern(DocumentoMSG.FIND_ALL)
  findAll() {
    return this.documentoService.findAll();
  }

  @MessagePattern(DocumentoMSG.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.documentoService.findOne(id);
  }

  @MessagePattern(DocumentoMSG.UPDATE)
  update(@Payload() payload) {
    return this.documentoService.update(payload.id, payload.documentoDTO);
  }

  @MessagePattern(DocumentoMSG.DELETE)
  delete(@Payload() id: string) {
    return this.documentoService.delete(id);
  }
}
