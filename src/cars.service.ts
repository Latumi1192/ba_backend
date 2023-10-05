import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Car, CarDocument } from './cars.model';
import { Model } from 'mongoose';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private carModel: Model<CarDocument>) {}

  create(carData: Car): Promise<Car> {
    const createdCar = new this.carModel(carData);
    return createdCar.save();
  }

  findAll(): Promise<Car[]> {
    return this.carModel.find().exec();
  }
}
