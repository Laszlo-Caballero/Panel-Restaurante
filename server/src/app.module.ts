import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuModule } from './menu/menu.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ImagenModule } from './imagen/imagen.module';
import { EventsGateway } from './events/events.gateway';
import { EventsModule } from './events/events.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST_MYSQL,
      port: Number.parseInt(process.env.PORT_MYSQL),
      username: process.env.USER_MYSQL,
      password: process.env.PASSWORD_MYSQL,
      database: process.env.DATABASE_MYSQL,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    MenuModule,
    CategoriaModule,
    ImagenModule,
    EventsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [EventsGateway],
})
export class AppModule {}
