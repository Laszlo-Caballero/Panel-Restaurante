import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MenuService } from './menu.service';
import { Comida } from 'src/entitys/menu.entity';
import { ComidaDto } from 'src/dtos/comida.dto';

@Controller('menu')
export class MenuController {
  constructor(private comidasService: MenuService) {}

  @Get()
  getComidas(): Promise<Comida[]> {
    return this.comidasService.getComidas();
  }
  @Get(':id')
  getComida(@Param('id') id: number) {
    return this.comidasService.getComida(id);
  }

  @Post()
  createComida(@Body() createComidaDto: ComidaDto) {
    return this.comidasService.createComida(createComidaDto);
  }
}
