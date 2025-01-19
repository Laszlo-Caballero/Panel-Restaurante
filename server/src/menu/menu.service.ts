import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaService } from 'src/categoria/categoria.service';
import { CategoriaDto } from 'src/dtos/categoria.dto';
import { ComidaDto } from 'src/dtos/comida.dto';
import { Comida } from 'src/entitys/menu.entity';
import { ImagenService } from 'src/imagen/imagen.service';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Comida) private comidaRepository: Repository<Comida>,
    private categoriaService: CategoriaService,
    private imagenService: ImagenService,
  ) {}

  async getComidas() {
    const comidas = await this.comidaRepository.find({
      relations: ['categorias', 'imagen'],
    });
    return {
      body: comidas,
      statusCode: HttpStatus.OK,
    };
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

    return {
      body: comida,
      statusCode: HttpStatus.OK,
    };
  }

  async createComida(comida: ComidaDto, images: Express.Multer.File[]) {
    const categorias = await Promise.all(
      comida.categorias.map(async (categoriasDto: CategoriaDto) => {
        let categoria = await this.categoriaService.getCategoriaByName(
          categoriasDto.categoria,
        );
        if (!categoria) {
          const categoriaresponsive =
            await this.categoriaService.createCategoria(categoriasDto);
          categoria = categoriaresponsive.body;
        }

        return categoria;
      }),
    );

    const imagenes = await Promise.all(
      images.map(async (imagen) => {
        const newImagen = await this.imagenService.createImagen(imagen);
        return newImagen;
      }),
    );

    const newComida = this.comidaRepository.create({
      ...comida,
      categorias,
      imagen: imagenes,
    });

    const comidaSave = await this.comidaRepository.save(newComida);
    return {
      body: comidaSave,
      statusCode: HttpStatus.CREATED,
    };
  }
}
