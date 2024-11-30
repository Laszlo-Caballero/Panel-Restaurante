import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from 'src/dtos/user.dto';
import { UserLoginDto } from 'src/dtos/UserLogin.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Post('register')
  register(@Body() userRegister: UserDto) {
    return this.authService.register(userRegister);
  }

  @Post('login')
  login(@Body() userLogin: UserLoginDto) {
    return this.authService.login(userLogin);
  }
}
