import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Imagen } from 'src/entitys/imagen.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImagenService {
  constructor(
    @InjectRepository(Imagen) private imagenRepository: Repository<Imagen>,
  ) {}

  createImagen(imagen: Express.Multer.File) {
    const newImagen = this.imagenRepository.create({
      imagenPath: imagen.filename,
    });

    return this.imagenRepository.save(newImagen);
  }
}
