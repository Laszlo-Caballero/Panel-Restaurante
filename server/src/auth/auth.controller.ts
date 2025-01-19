import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from 'src/dtos/user.dto';
import { UserLoginDto } from 'src/dtos/UserLogin.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() userRegister: UserDto) {
    return this.authService.register(userRegister);
  }

  @Post('login')
  login(@Body() userLogin: UserLoginDto) {
    return this.authService.login(userLogin);
  }
}
