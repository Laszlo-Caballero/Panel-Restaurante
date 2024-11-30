import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { promises } from 'fs';
import * as sharp from 'sharp';
import { Imagen } from 'src/entitys/imagen.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImagenService {
  constructor(
    @InjectRepository(Imagen) private imagenRepository: Repository<Imagen>,
  ) {}

  createImagen(imagen: Express.Multer.File) {
    const filePath = `${imagen.destination}/${imagen.filename}`;
    this.convertWebp(filePath);

    const fileName = imagen.filename.split('.').shift().concat('.webp');

    const newImagen = this.imagenRepository.create({
      imagenPath: fileName,
    });

    return this.imagenRepository.save(newImagen);
  }

  async convertWebp(filePath: string) {
    const outputFile = filePath.replace(/\.\w+$/, '.webp');
    await sharp(filePath).resize(500, 500).webp().toFile(outputFile);

    await promises.unlink(filePath);
    return outputFile;
  }
}
