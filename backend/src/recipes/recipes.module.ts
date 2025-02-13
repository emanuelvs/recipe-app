import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReceitasService } from './recipes.service';
import { ReceitasController } from './recipes.controller';
import { Receita } from './entities/receita.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Receita])],
  controllers: [ReceitasController],
  providers: [ReceitasService],
})
export class ReceitasModule {}
