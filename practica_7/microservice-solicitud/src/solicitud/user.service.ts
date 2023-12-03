import { HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { SOLICITUD } from 'src/common/models/models';
import { ISolicitud } from 'src/common/interfaces/solicitud.interface';
import { SolicitudDTO } from './dto/solicitud.dto';

@Injectable()
export class SolicitudService {
  constructor(@InjectModel(SOLICITUD.name) private readonly model: Model<ISolicitud>) {}

  async create(solicitudDTO: SolicitudDTO): Promise<ISolicitud> {
    const newSolicitud = new this.model(solicitudDTO);
    return await newSolicitud.save();
  }

  async findAll(): Promise<ISolicitud[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<ISolicitud> {
    return await this.model.findById(id);
  }

  async update(id: string, solicitudDTO: SolicitudDTO): Promise<ISolicitud> {
    return await this.model.findByIdAndUpdate(id, solicitudDTO, { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
