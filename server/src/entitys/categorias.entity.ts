import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Comida } from './menu.entity';

@Entity()
export class Catergorias {
  @PrimaryGeneratedColumn()
  idCategoria: number;

  @Column({ type: 'varchar', length: 50 })
  categoria: string;

  @ManyToMany(() => Comida, (comida) => comida.categorias)
  comidas: Comida[];
}
