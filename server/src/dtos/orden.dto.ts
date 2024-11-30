import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsNumber,
  Min,
  ValidateNested,
} from 'class-validator';
import { comidaOrdenDto } from './comidaOrden.dto';

export class OrdenDto {
  @IsNumber()
  @Min(1)
  mesa: number;

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => comidaOrdenDto)
  ordenes: comidaOrdenDto[];
}
