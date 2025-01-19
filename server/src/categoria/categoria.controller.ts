import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaDto } from 'src/dtos/categoria.dto';

@Controller('categoria')
export class CategoriaController {
  constructor(private categoriasServices: CategoriaService) {}

  @Get()
  getCategorias() {
    return this.categoriasServices.getCategorias();
  }
  @Post()
  createCategoria(@Body() categoriaDto: CategoriaDto) {
    return this.categoriasServices.createCategoria(categoriaDto);
  }
}
