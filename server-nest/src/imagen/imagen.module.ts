import { Module } from '@nestjs/common';
import { ImagenService } from './imagen.service';
import { ImagenController } from './imagen.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Imagen } from 'src/entitys/imagen.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Imagen])],
  providers: [ImagenService],
  controllers: [ImagenController],
})
export class ImagenModule {}
