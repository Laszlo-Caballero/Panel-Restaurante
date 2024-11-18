import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuModule } from './menu/menu.module';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'jade2314',
      database: 'restaurante',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    MenuModule,
    CategoriaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
