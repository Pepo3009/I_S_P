import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SolicitudBaja } from './entities/solicitud_baja.entity';
import { CreateSolicitudBajaInput } from './dto/inputs';

@Injectable()
export class SolicitudBajaService {
  constructor(
    @InjectModel(SolicitudBaja.name)
    private solicitudBajaModel: Model<SolicitudBaja>,
  ) {}
  async create(createSolicitudBajaInput: CreateSolicitudBajaInput) {
    const { name } = createSolicitudBajaInput;
    const solicitudBajaExiste = await this.solicitudBajaModel.findOne({ name });
    if (solicitudBajaExiste) {
      throw new ConflictException(
        `La solicitud de Baja con el nombre "${name}" ya existe.`,
      );
    }
    const solicitudBajaCreate = await this.solicitudBajaModel.create(
      createSolicitudBajaInput,
    );
    return solicitudBajaCreate;
  }

  async findAll() {
    const solicitudBajaFindAll = await this.solicitudBajaModel.find({});
    return solicitudBajaFindAll;
  }

  async softDelete(id: string): Promise<void> {
    await this.solicitudBajaModel
      .findByIdAndUpdate(id, { estado: false })
      .exec(); // Cambiar el estado a falso
  }
}
