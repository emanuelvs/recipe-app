import {
  IsNotEmpty,
  IsString,
  IsArray,
  IsNumber,
  IsUrl,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CriarReceitaDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O título é obrigatório' })
  @IsString()
  titulo: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'A descrição é obrigatória' })
  @IsString()
  descricao: string;

  @ApiProperty()
  @IsArray()
  @IsString({ each: true })
  ingredientes: string[];

  @ApiProperty()
  @IsArray()
  @IsString({ each: true })
  modoPreparo: string[];

  @ApiProperty()
  @IsUrl({}, { message: 'URL da imagem inválida' })
  urlImagem: string;

  @ApiProperty()
  @IsNumber()
  tempoPreparo: number;

  @ApiProperty()
  @IsNumber()
  tempoCozimento: number;

  @ApiProperty()
  @IsNumber()
  porcoes: number;
}
