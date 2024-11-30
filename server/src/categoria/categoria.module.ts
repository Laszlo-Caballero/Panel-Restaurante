import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Catergorias } from 'src/entitys/categorias.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Catergorias])],
  providers: [CategoriaService],
  controllers: [CategoriaController],
})
export class CategoriaModule {}
