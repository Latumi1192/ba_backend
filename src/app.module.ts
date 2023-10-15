import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://honghaibui1192:khongtheketnoi@badatenbank.wuvcnjq.mongodb.net/?retryWrites=true&w=majority',
    ),
    CarsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
