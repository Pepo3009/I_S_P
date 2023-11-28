import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SolicitudDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
