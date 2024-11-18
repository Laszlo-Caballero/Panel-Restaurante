import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CategoriaDto {
  @IsOptional()
  @IsNumber()
  idCategoria: number;

  @IsString()
  categoria: string;
}
