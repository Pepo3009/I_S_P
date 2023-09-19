import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudBajaService } from './solicitud_baja.service';
import { SolicitudBaja, SolicitudBajaDocument } from './schema/solicitud_baja.schema';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { NotFoundException } from '@nestjs/common';
import { UpdateSolicitudBajaDto } from './dto/update-solicitud_baja.dto';

describe('SolicitudBajaService', () => {
  let service: SolicitudBajaService;
  let model: Model<SolicitudBajaDocument>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolicitudBajaService,
        {
          provide: getModelToken(SolicitudBaja.name),
          useValue: Model, // Asegúrate de que aquí esté configurado correctamente
        },
      ],
    }).compile();

    service = module.get<SolicitudBajaService>(SolicitudBajaService);
    model = module.get<Model<SolicitudBajaDocument>>(getModelToken(SolicitudBaja.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('findOne', () => {
    it('should return a Document object when given a valid id', async () => {
      // Arrange
      const mockId = 'valid-id';
      const mockProcesoDet = new SolicitudBaja();
      jest.spyOn(model, 'findById').mockResolvedValueOnce(mockProcesoDet);

      // Act
      const result = await service.findOne(mockId);

      // Assert
      expect(result).toEqual(mockProcesoDet);
    });

    it('should throw a NotFoundException when given an invalid id', async () => {
      // Arrange
      const mockId = 'invalid-id';
      jest.spyOn(model, 'findById').mockResolvedValueOnce(null);

      // Act and Assert
      await expect(service.findOne(mockId)).rejects.toThrowError(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a role when provided a valid id and data', async () => {
      // Arrange
      const mockId = 'valid-id';
      const mockUpdateRoleDto: UpdateSolicitudBajaDto = {
        // Provide the properties you want to update
      };
      const mockUpdatedRole = new SolicitudBaja(); // You can create a mock Role object here
      jest.spyOn(model, 'findByIdAndUpdate').mockResolvedValueOnce(mockUpdatedRole);

      // Act
      const result = await service.update(mockId, mockUpdateRoleDto);

      // Assert
      expect(result).toEqual(mockUpdatedRole);
    });
  });
  describe('remove', () => {
    it('should remove a role when provided a valid id', async () => {
      // Arrange
      const mockId = 'valid-id';
      const mockRemovedRole = new SolicitudBaja(); // You can create a mock Role object here
      jest.spyOn(model, 'findById').mockResolvedValueOnce(mockRemovedRole);
      jest.spyOn(model, 'findByIdAndDelete').mockResolvedValueOnce(mockRemovedRole);

      // Act
      const result = await service.remove(mockId);

      // Assert
      expect(result).toEqual(mockRemovedRole);
    });
  });
});
