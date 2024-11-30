import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { Comida } from 'src/entitys/menu.entity';
import { ComidaDto } from 'src/dtos/comida.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

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

  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(
    FilesInterceptor('files', 3, {
      storage: diskStorage({
        destination: './src/uploads',
        filename: (req, file, cb) => {
          const ext = file.originalname.split('.').pop();
          const filename = `file-${Date.now()}.${ext}`;
          cb(null, filename);
        },
      }),
    }),
  )
  createComida(
    @Body('data') data: string,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    const createComidaDto: ComidaDto = JSON.parse(data);
    return this.comidasService.createComida(createComidaDto, files);
  }
}
