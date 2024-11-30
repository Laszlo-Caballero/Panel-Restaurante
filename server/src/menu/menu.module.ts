import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comida } from 'src/entitys/menu.entity';
import { Imagen } from 'src/entitys/imagen.entity';
import { Catergorias } from 'src/entitys/categorias.entity';
import { CategoriaService } from 'src/categoria/categoria.service';
import { ImagenService } from 'src/imagen/imagen.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comida, Imagen, Catergorias])],
  controllers: [MenuController],
  providers: [MenuService, CategoriaService, ImagenService],
})
export class MenuModule {}
