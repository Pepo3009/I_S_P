import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/inputs/create-user.input';
import { UpdateUserInput } from './dto/inputs/update-user.input';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';

//TODO http://localhost:3000/user/

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }

  @Mutation(() => Boolean)
  async softDeleteUser(@Args('id') id: string): Promise<boolean> {
    await this.userService.softDelete(id);
    return true;
  }
}
