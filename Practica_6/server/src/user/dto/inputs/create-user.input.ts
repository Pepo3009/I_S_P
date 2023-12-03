// import { IsEmail, IsMongoId, IsNotEmpty } from "class-validator";

// export class CreateUserDto {

//     @IsNotEmpty()
//     name: string;

//     @IsNotEmpty()
//     @IsEmail()
//     email: string;

//     @IsNotEmpty()
//     password: string;

//     @IsNotEmpty()
//     @IsMongoId()
//     ciudadId: string

//     @IsNotEmpty()
//     @IsMongoId()
//     roleId: string

// }

import { IsNotEmpty, IsString, IsMongoId, IsBoolean } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @IsNotEmpty({ message: 'El campo "name" es requerido' })
  @IsString({ message: 'El campo "name" debe ser una cadena de caracteres' })
  @Field(() => String, { description: 'Nombre del usuario' })
  name: string;

  @IsNotEmpty({ message: 'El campo "email" es requerido' })
  @Field(() => String, { description: 'Email del usuario' })
  email: string;

  @IsNotEmpty({ message: 'El campo "password" es requerido' })
  @Field(() => String, { description: 'Contraseña del usuario' })
  password: string;

  @IsNotEmpty({ message: 'El campo "ciudadId" es requerido' })
  @IsMongoId({
    message: 'El campo "ciudadId" debe ser una ID de MongoDB válida',
  })
  @Field(() => String, { description: 'ID de la ciudad del usuario' })
  ciudadId: string;

  @IsNotEmpty({ message: 'El campo "roleId" es requerido' })
  @IsMongoId({
    message: 'El campo "roleId" debe ser una ID de MongoDB válida',
  })
  @Field(() => String, { description: 'ID del rol asignado al usuario' })
  roleId: string;
  @IsNotEmpty({ message: 'El campo "estado" es requerido' })
  @IsBoolean({ message: 'El campo "estado" debe ser un valor booleano válida' })
  @Field(() => Boolean, { description: 'Estado el flujo del proceso' })
  estado: string;
}
