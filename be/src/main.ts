import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  })

  const PORT = app.get('PORT') || 8001
  await app.listen(PORT, ()=> console.log(`App is running on port ${PORT}`));
}
bootstrap();
