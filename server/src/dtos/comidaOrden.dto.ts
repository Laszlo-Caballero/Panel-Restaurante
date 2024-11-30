import {
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class comidaOrdenDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Min(1)
  idComida: number;

  @IsString()
  nombre: string;

  @IsNumber()
  @IsPositive()
  @Min(1)
  precio: number;

  @IsNumber()
  @IsInt()
  @IsPositive()
  @Min(1)
  cantidad: number;
}
