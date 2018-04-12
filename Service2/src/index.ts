import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { Transport } from '@nestjs/microservices';

const PORT = parseInt(process.env.PORT, 10) || 3000;

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  await app.listen(PORT);
}
bootstrap();
