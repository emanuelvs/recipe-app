import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('receitas')
export class Receita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  descricao: string;

  @Column('simple-array')
  ingredientes: string[];

  @Column('simple-array')
  modoPreparo: string[];

  @Column()
  urlImagem: string;

  @Column()
  tempoPreparo: number;

  @Column()
  tempoCozimento: number;

  @Column()
  porcoes: number;

  @CreateDateColumn()
  criadoEm: Date;

  @UpdateDateColumn()
  atualizadoEm: Date;

  @Column({ default: false })
  favorito: boolean;
}
