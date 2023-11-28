import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProceso } from 'src/common/interfaces/proceso.interface';
import { PROCESO } from 'src/common/models/models';
import { ProcesoDTO } from './dto/proceso.dto';

@Injectable()
export class ProcesoService {
  constructor(
    @InjectModel(PROCESO.name) private readonly model: Model<IProceso>,
  ) {}

  async create(procesoDTO: ProcesoDTO): Promise<IProceso> {
    const newPassenger = new this.model(procesoDTO);
    return await newPassenger.save();
  }

  async findAll(): Promise<IProceso[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<IProceso> {
    return await this.model.findById(id);
  }

  async update(id: string, procesoDTO: ProcesoDTO): Promise<IProceso> {
    return await this.model.findByIdAndUpdate(id, procesoDTO, { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
