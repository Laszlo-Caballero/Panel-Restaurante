import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaService } from 'src/categoria/categoria.service';
import { CategoriaDto } from 'src/dtos/categoria.dto';
import { ComidaDto } from 'src/dtos/comida.dto';
import { Catergorias } from 'src/entitys/categorias.entity';
import { Comida } from 'src/entitys/menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Comida) private comidaRepository: Repository<Comida>,
    @InjectRepository(Catergorias)
    private categoriaRepository: Repository<Catergorias>,
    private categoriaService: CategoriaService,
  ) {}

  getComidas() {
    return this.comidaRepository.find({
      relations: ['categorias', 'imagenes'],
    });
  }

  async getComida(id: number) {
    const comida = await this.comidaRepository.findOne({
      where: { idComida: id },
      relations: ['categorias', 'imagenes'],
    });

    if (!comida) {
      return new HttpException(
        'No se encontro la comida',
        HttpStatus.NOT_FOUND,
      );
    }

    return comida;
  }

  async createComida(comida: ComidaDto) {
    const categorias = await Promise.all(
      comida.categorias.map(async (categoriasDto: CategoriaDto) => {
        let categoria = await this.categoriaService.getCategoriaByName(
          categoriasDto.categoria,
        );
        if (!categoria) {
          categoria = await this.categoriaService.createCategoria(categoria);
        }

        return categoria;
      }),
    );

    const newComida = this.comidaRepository.create({
      ...comida,
      categorias,
    });

    return await this.comidaRepository.save(newComida);
  }
}
