import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Receita } from './entities/receita.entity';
import { CriarReceitaDto } from './dto/criar-receita.dto';

@Injectable()
export class ReceitasService {
  constructor(
    @InjectRepository(Receita)
    private receitaRepositorio: Repository<Receita>,
  ) {}

  async toggleFavorito(id: number) {
    const receita = await this.receitaRepositorio.findOne({ where: { id } });
    if (!receita) {
      throw new NotFoundException(`Receita com ID "${id}" não encontrada`);
    }
    receita.favorito = !receita.favorito;
    return this.receitaRepositorio.save(receita);
  }

  criar(criarReceitaDto: CriarReceitaDto) {
    const receita = this.receitaRepositorio.create(criarReceitaDto);
    return this.receitaRepositorio.save(receita);
  }

  buscarTodas() {
    return this.receitaRepositorio.find();
  }

  async buscarUma(id: number) {
    const receita = await this.receitaRepositorio.findOne({ where: { id } });
    if (!receita) {
      throw new NotFoundException(`Receita com ID "${id}" não encontrada`);
    }
    return receita;
  }

  async atualizar(id: number, dadosAtualizacao: CriarReceitaDto) {
    const receita = await this.buscarUma(id);
    Object.assign(receita, dadosAtualizacao);
    return this.receitaRepositorio.save(receita);
  }

  async remover(id: number) {
    const receita = await this.buscarUma(id);
    return this.receitaRepositorio.remove(receita);
  }
}
