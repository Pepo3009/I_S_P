import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SolicitudBajaService } from './solicitud_baja.service';
import { SolicitudBaja } from './entities/solicitud_baja.entity';
import { CreateSolicitudBajaInput } from './dto/inputs';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => SolicitudBaja)
export class SolicitudBajaResolver {
  constructor(private readonly solicitudBajaService: SolicitudBajaService) {}

  @Mutation(() => SolicitudBaja)
  async create(@Args('createSolicitudBajaInput') createSolicitudBajaInput: CreateSolicitudBajaInput) {
    return this.solicitudBajaService.create(createSolicitudBajaInput);
  }

  @Query(() => [SolicitudBaja], { name: 'solicitudbajas' })
  findAll() {
    return this.solicitudBajaService.findAll();
  }

  @Mutation(() => Boolean)
  async softDeleteSolicitudBaja(@Args('id') id: string): Promise<boolean> {
    await this.solicitudBajaService.softDelete(id);
    return true;
  }
}
