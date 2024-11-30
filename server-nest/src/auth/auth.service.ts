import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/dtos/user.dto';
import { User } from 'src/entitys/user.entity';
import { Repository } from 'typeorm';
import { hash, compare } from 'bcrypt';
import { UserLoginDto } from 'src/dtos/UserLogin.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepostory: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(userRegister: UserDto) {
    const { email, contraseña } = userRegister;

    const userEmail = await this.userRepostory.findOneBy({
      email,
    });

    if (userEmail) {
      return new HttpException('Error', HttpStatus.CONFLICT);
    }

    const passwordHash = await hash(contraseña, 10);
    const user = this.userRepostory.create({
      ...userRegister,
      contraseña: passwordHash,
    });

    return this.userRepostory.save(user);
  }

  async login(userLogin: UserLoginDto) {
    const { email, contraseña } = userLogin;

    const user = await this.userRepostory.findOneBy({
      email,
    });

    if (!user) return new HttpException('Error', HttpStatus.UNAUTHORIZED);

    const isPassword = await compare(contraseña, user.contraseña);

    if (!isPassword) return new HttpException('Error', HttpStatus.UNAUTHORIZED);

    const payload = { id: user.idUser, name: user.nombre, type: user.tipo };
    const token = await this.jwtService.sign(payload);

    return {
      user,
      token,
    };
  }
}
