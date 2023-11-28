import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SolicitudBajaMSG } from 'src/common/constants';
import { SolicitudDTO } from './dto/solicitud.dto';
import { SolicitudService } from './user.service';

@Controller()
export class SolicitudController {
  constructor(private readonly solicitudService: SolicitudService) {}

  @MessagePattern(SolicitudBajaMSG.CREATE)
  create(@Payload() solicitudDTO: SolicitudDTO) {
    return this.solicitudService.create(solicitudDTO);
  }

  @MessagePattern(SolicitudBajaMSG.FIND_ALL)
  findAll() {
    return this.solicitudService.findAll();
  }

  @MessagePattern(SolicitudBajaMSG.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.solicitudService.findOne(id);
  }
  @MessagePattern(SolicitudBajaMSG.UPDATE)
  update(@Payload() payload: any) {
    return this.solicitudService.update(payload.id, payload.solicitudDTO);
  }

  @MessagePattern(SolicitudBajaMSG.DELETE)
  delete(@Payload() id: string) {
    return this.solicitudService.delete(id);
  }
}
