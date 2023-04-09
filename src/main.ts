import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({transform:true}))
  app.use(helmet())
  app.use(compression())
  app.setGlobalPrefix('api')
  await app.listen(3000,'0.0.0.0'); 
}
bootstrap();
 