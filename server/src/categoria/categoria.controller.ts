import { Controller, Get } from '@nestjs/common';
import { Catergorias } from 'src/entitys/categorias.entity';
import { CategoriaService } from './categoria.service';

@Controller('categoria')
export class CategoriaController {
  constructor(private categoriasServices: CategoriaService) {}

  @Get()
  getCategorias(): Promise<Catergorias[]> {
    return this.categoriasServices.getCategorias();
  }
}
