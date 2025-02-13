import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReceitasModule } from './recipes/recipes.module';
import { Receita } from './recipes/entities/receita.entity';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'sqlite',
        database: join(__dirname, '..', 'db', 'receitas.sqlite'),
        entities: [Receita],
        synchronize: true, // Não use em produção
        autoLoadEntities: true,
      }),
    }),
    ReceitasModule,
  ],
})
export class AppModule {}
