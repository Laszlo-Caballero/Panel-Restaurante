import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UserDto {
  @IsString()
  nombre: string;
  @IsEmail()
  email: string;
  @IsString()
  @MinLength(6)
  contraseña: string;
  @IsString()
  @IsOptional()
  imagen: string;
}
