import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsMongoId, IsNotEmpty, IsString } from 'class-validator';

// export class CreateSolicitudBajaDto {
//     @IsNotEmpty({ message: 'El campo "name" es requerido' })
//     @IsString({ message: 'El campo "name" no es string' })
//     name: string
//     @IsNotEmpty({ message: 'El campo "documento_id" es requerido' })
//     @IsMongoId({ message: 'El campo "documento_id" no es una mongo Id' })
//     documento_id: string
//     @IsNotEmpty({ message: 'El campo "proceso_id" es requerido' })
//     @IsMongoId({ message: 'El campo "proceso_id" no es una mongo Id' })
//     proceso_id: string
// }

@InputType()
export class CreateSolicitudBajaInput {
  @IsNotEmpty({ message: 'El campo "name" es requerido' })
  @IsString({ message: 'El campo "name" debe ser una cadena de caracteres' })
  @Field(() => String, { description: 'Nombre de solicitud' })
  name: string;

  @IsNotEmpty({ message: 'El campo "documento_id" es requerido' })
  @IsMongoId({
    message: 'El campo "documento_id:" debe ser una ID de MongoDB válida',
  })
  @Field(() => String, {
    description: 'ID del documento asignado a la solicitud',
  })
  documento_id: string;

  @IsNotEmpty({ message: 'El campo "proceso_id" es requerido' })
  @IsMongoId({
    message: 'El campo "proceso_id" debe ser una ID de MongoDB válida',
  })
  @Field(() => String, {
    description: 'ID del proceso asignado a la solicitud',
  })
  proceso_id: string;

  @IsNotEmpty({ message: 'El campo "estado" es requerido' })
  @IsBoolean({ message: 'El campo "estado" debe ser un valor booleano válida' })
  @Field(() => Boolean, { description: 'Estado el flujo del proceso' })
  estado: string;
}
