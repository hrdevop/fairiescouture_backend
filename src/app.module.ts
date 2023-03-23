import { ClientModule } from './client/client.module';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MeasurementModule } from './measurement/measurement.module';
import { EmptyStringToNullMiddleware } from './middlewares/empty-string-to-null.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT as any,
      username: process.env.DATABASE_USER,
      database: process.env.DATABASE_DATABASE,
      password: process.env.DATABASE_PASSWORD,

      autoLoadEntities: true,
      synchronize: true,
      logging: true
    }),
    ClientModule,
    MeasurementModule,
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
