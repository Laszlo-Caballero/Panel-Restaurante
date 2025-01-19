import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  idUser: number;
  @Column({ length: 25 })
  nombre: string;
  @Column({ length: 255, unique: true })
  email: string;
  @Column({ length: 50, default: 'empleado' })
  tipo: string;
  @Column({ length: 500 })
  contraseña: string;
  @Column({ nullable: true })
  imagen: string;
}
