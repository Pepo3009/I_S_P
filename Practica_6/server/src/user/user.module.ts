import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [UserResolver, UserService],
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    // TypeOrmModule.forFeature([
    //   User
    // ])
  ],
  // controllers: [UserResolver],
  // providers: [UserService],
  // exports: [UserService],
})
export class UserModule {}
