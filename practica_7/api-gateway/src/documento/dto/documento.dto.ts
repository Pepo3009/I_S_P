import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class DocumentoDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  principal: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  recibido: boolean;
}
