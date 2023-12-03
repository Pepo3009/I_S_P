// import { Injectable } from "@nestjs/common";
// import { CreateDocumentoDto } from "./dto/documento.dto";
// import { UpdateDocumentoDto } from "./dto/update-documento.dto";

// @Injectable()
// export class DocumentoService {
//   create(createDocumentoDto: CreateDocumentoDto) {
//     return "This action adds a new documento";
//   }

//   findAll() {
//     return `This action returns all documento`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} documento`;
//   }

//   update(id: number, updateDocumentoDto: UpdateDocumentoDto) {
//     return `This action updates a #${id} documento`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} documento`;
//   }
// }
import { DocumentoDTO } from './dto/documento.dto';
import { DOCUMENTO } from './../common/models/models';
import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDocumento } from 'src/common/interfaces/documento.interface';
import axios from 'axios';
import * as moment from 'moment';

@Injectable()
export class DocumentoService {
  constructor(
    @InjectModel(DOCUMENTO.name)
    private readonly model: Model<IDocumento>,
  ) {}

  async create(documentoDTO: DocumentoDTO): Promise<IDocumento> {
    const newDocumento = new this.model(documentoDTO);
    return await newDocumento.save();
  }

  async findAll(): Promise<IDocumento[]> {
    return await this.model.find().populate('persona_id');
  }

  async findOne(id: string): Promise<IDocumento> {
    return await this.model.findById(id).populate('persona_id');
  }

  async update(id: string, documentoDTO: DocumentoDTO): Promise<IDocumento> {
    return await this.model.findByIdAndUpdate(id, documentoDTO, { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
