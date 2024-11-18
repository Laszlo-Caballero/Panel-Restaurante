import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Comida } from './menu.entity';

@Entity()
export class Imagen {
  @PrimaryGeneratedColumn()
  idImagen: number;
  @Column({ type: 'varchar' })
  imagenPath: string;

  @ManyToMany(() => Imagen, (imagen) => imagen.comidas)
  comidas: Comida[];
}
