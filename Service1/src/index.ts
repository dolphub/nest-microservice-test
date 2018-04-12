import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { Transport } from '@nestjs/microservices';

const REDIS_URI = process.env.REDIS_URI || 'redis://localhost:6379';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ApplicationModule, {
    transport: Transport.REDIS,
    url: REDIS_URI
  });
  app.listen(() => console.log(`Service 1 started...`));
}
bootstrap();
