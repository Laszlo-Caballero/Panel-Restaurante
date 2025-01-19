import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async getCategorias() {
    const categorias = await this.categoriaRepository.find();

    return {
      body: categorias,
      statusCode: HttpStatus.OK,
    };
  }

  async getCategoriaById(id: number) {
    const categoria = await this.categoriaRepository.findOne({
      where: { idCategoria: id },
    });

    if (!categoria) {
      return new HttpException('No se encontro', HttpStatus.NOT_FOUND);
    }

    return {
      body: categoria,
      statusCode: HttpStatus.OK,
    };
  }

  getCategoriaByName(name: string): Promise<Catergorias> {
    return this.categoriaRepository.findOneBy({
      categoria: name,
    });
  }

  async createCategoria(categoriaDto: CategoriaDto) {
    const newCategoria = this.categoriaRepository.create({
      categoria: categoriaDto.categoria,
    });

    const categoriaSave = await this.categoriaRepository.save(newCategoria);
    return {
      body: categoriaSave,
      statusCode: HttpStatus.CREATED,
    };
  }
}
