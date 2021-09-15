import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

import { SERVER_PORT, SERVER_HOST } from '../config';

const startServer = async () => {
  const server = await NestFactory.create<NestExpressApplication>(AppModule);
  server.listen(SERVER_PORT, SERVER_HOST);
};

startServer();
