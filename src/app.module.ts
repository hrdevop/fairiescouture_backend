import { FileHandlerModule } from './file-handler/file-handler.module';
import { ClientModule } from './client/client.module';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { EmptyStringToNullMiddleware } from './middlewares/empty-string-to-null.middleware';
import { MeasurementTypeModule } from './measurement-type/measurement-type.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT as any,
      username: process.env.DATABASE_USER,
      database: process.env.DATABASE_NAME,
      password: process.env.DATABASE_PASSWORD,
      autoLoadEntities: true,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false
        }
      },
      synchronize: true,
      logging: true
    }),
    FileHandlerModule,
    MeasurementTypeModule,
    ClientModule,
  ],
  controllers: [
    AppController,

  ],
  providers: [
    AppService,],


})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(EmptyStringToNullMiddleware).forRoutes('*')
  }
}
