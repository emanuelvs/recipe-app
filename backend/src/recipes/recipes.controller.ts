import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ReceitasService } from './recipes.service';
import { CriarReceitaDto } from './dto/criar-receita.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('receitas')
@Controller('receitas')
export class ReceitasController {
  constructor(private readonly receitasService: ReceitasService) {}

  @Post(':id/favorito')
  toggleFavorito(@Param('id', ParseIntPipe) id: number) {
    return this.receitasService.toggleFavorito(id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar uma nova receita' })
  @ApiResponse({ status: 201, description: 'Receita criada com sucesso.' })
  criar(@Body() criarReceitaDto: CriarReceitaDto) {
    return this.receitasService.criar(criarReceitaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Buscar todas as receitas' })
  buscarTodas() {
    return this.receitasService.buscarTodas();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma receita pelo id' })
  buscarUma(@Param('id') id: string) {
    return this.receitasService.buscarUma(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma receita' })
  atualizar(
    @Param('id') id: string,
    @Body() dadosAtualizacao: CriarReceitaDto,
  ) {
    return this.receitasService.atualizar(+id, dadosAtualizacao);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma receita' })
  remover(@Param('id') id: string) {
    return this.receitasService.remover(+id);
  }
}
