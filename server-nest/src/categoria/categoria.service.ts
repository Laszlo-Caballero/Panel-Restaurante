import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaDto } from 'src/dtos/categoria.dto';
import { Catergorias } from 'src/entitys/categorias.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Catergorias)
    private categoriaRepository: Repository<Catergorias>,
  ) {}

  getCategorias(): Promise<Catergorias[]> {
    return this.categoriaRepository.find();
  }

  getCategoriaByName(name: string): Promise<Catergorias> {
    return this.categoriaRepository.findOneBy({
      categoria: name,
    });
  }

  createCategoria(categoriaDto: CategoriaDto) {
    const newCategoria = this.categoriaRepository.create({
      categoria: categoriaDto.categoria,
    });

    return this.categoriaRepository.save(newCategoria);
  }
}
