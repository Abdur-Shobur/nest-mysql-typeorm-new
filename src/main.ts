import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common';
import { configureSwaggerDocs } from './helpers/configure-swagger-docs.helper';
import { configureAuthSwaggerDocs } from './helpers/configure-auth-swagger-docs.helper';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { registerFastifyPlugins } from './common/plugins/register-fastify.plugins';
import { validateSchemaEnv } from './helpers/validation-schema-env';
import { config } from 'dotenv';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { formatValidationErrors } from './helpers/validation-error-formatter.helper';

config();

validateSchemaEnv(process.env);

async function bootstrap() {
  const fastifyAdapter = new FastifyAdapter();
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastifyAdapter,
    { bufferLogs: true },
  );

  // Plugins for Fastify
  registerFastifyPlugins(app);
  // Swagger Configurations
  configureAuthSwaggerDocs(app);
  configureSwaggerDocs(app);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      exceptionFactory: (errors) => {
        const formattedErrors = formatValidationErrors(errors);
        return new BadRequestException({
          error: formattedErrors,
          message: 'Validation error',
          statusCode: 400,
        });
      },
    }),
  );

  const port = process.env.SERVER_PORT || 3000;
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  await app.listen(port, '0.0.0.0');
  Logger.debug(`Server running on port ${port}`, 'Bootstrap');
  if (process.env.NODE_ENV !== 'production') {
    Logger.debug(
      `${await app.getUrl()} - Environment: ${process.env.NODE_ENV}`,
      'Environment',
    );

    Logger.debug(`Url for OpenApi: ${await app.getUrl()}/docs`, 'Swagger');
  }
}
bootstrap();
