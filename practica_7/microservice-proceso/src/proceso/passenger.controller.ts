import { ProcesoMSG } from './../common/constants';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Body, Controller } from '@nestjs/common';
import { ProcesoService } from './proceso.service';
import { ProcesoDTO } from './dto/proceso.dto';

@Controller()
export class ProcesoController {
  constructor(private readonly procesoService: ProcesoService) {}

  @MessagePattern(ProcesoMSG.CREATE)
  create(@Body() procesoDTO: ProcesoDTO) {
    return this.procesoService.create(procesoDTO);
  }

  @MessagePattern(ProcesoMSG.FIND_ALL)
  findAll() {
    return this.procesoService.findAll();
  }

  @MessagePattern(ProcesoMSG.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.procesoService.findOne(id);
  }

  @MessagePattern(ProcesoMSG.UPDATE)
  update(@Payload() payload) {
    return this.procesoService.update(payload.id, payload.procesoDTO);
  }

  @MessagePattern(ProcesoMSG.DELETE)
  delete(@Payload() id: string) {
    return this.procesoService.delete(id);
  }
}
