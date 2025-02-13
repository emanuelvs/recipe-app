import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { mkdir } from 'fs/promises';
import { join } from 'path';

async function bootstrap() {
  // Criar pasta do banco de dados se não existir
  try {
    await mkdir(join(__dirname, '..', 'db'), { recursive: true });
  } catch (error) {
    // Ignora erro se a pasta já existir
  }

  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn'],
  });

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('API de Receitas')
    .setDescription('API para gerenciamento de receitas culinárias')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app as any, config);
  SwaggerModule.setup('api', app as any, document);

  await app.listen(3000);
}
bootstrap();
