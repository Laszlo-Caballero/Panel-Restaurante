import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Catergorias } from './categorias.entity';
import { Imagen } from './imagen.entity';

@Entity()
export class Comida {
  @PrimaryGeneratedColumn()
  idComida: number;
  @Column({ unique: true })
  nombre: string;
  @Column({ type: 'float' })
  precio: number;
  @Column({ type: 'boolean', default: true })
  estado: boolean;
  @Column({ type: 'text' })
  descripcion: string;
  @Column({ default: 0 })
  vendidos: number;

  @ManyToMany(() => Catergorias, (categorias) => categorias.comidas)
  @JoinTable({
    name: 'categoriaComida',
    joinColumn: {
      name: 'idComida',
    },
    inverseJoinColumn: {
      name: 'idCategoria',
    },
  })
  categorias: Catergorias[];

  @ManyToMany(() => Imagen, (imagen) => imagen.comidas)
  @JoinTable({
    name: 'imagenComida',
    joinColumn: {
      name: 'idComida',
    },
    inverseJoinColumn: {
      name: 'idImagen',
    },
  })
  imagenes: Imagen[];
}
