import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { CategoriaDto } from './categoria.dto';

export class ComidaDto {
  @IsString()
  nombre: string;

  @IsNumber()
  @Min(1)
  precio: number;

  @IsString()
  descripcion: string;

  @IsOptional()
  @IsBoolean()
  estado: boolean;

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CategoriaDto)
  categorias: CategoriaDto[];
}
