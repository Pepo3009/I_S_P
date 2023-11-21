import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/inputs/create-user.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { hash } from 'bcrypt';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserInput: CreateUserInput) {
    const { password } = createUserInput;
    const plainToHash = await hash(password, 10);
    createUserInput = { ...createUserInput, password: plainToHash };
    const userCreated = await this.userModel.create(createUserInput);
    return userCreated.save();
  }
  async findAll() {
    return this.userModel.find().exec();
  }
  async softDelete(id: string): Promise<void> {
    await this.userModel.findByIdAndUpdate(id, { estado: false }).exec(); // Cambiar el estado a falso
  }
}
