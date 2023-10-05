import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { DatabaseModule } from './database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CarSchema } from './cars.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Car', schema: CarSchema }]),
    DatabaseModule,
    MongooseModule.forRoot(
      'mongodb+srv://honghaibui1192:Latumi1192!@badatenbank.wuvcnjq.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [CarsController],
  providers: [CarsService],
})
export class AppModule {}
