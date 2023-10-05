import { Body, Controller, Get, Post, HttpStatus } from '@nestjs/common';
import { CreatCarDTO } from './create-car.dto';
import { Response } from 'express';
import { CarsService } from './cars.service';
import { Car } from './interfaces/car.interface';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Post()
  async create(@Body() createCarDTO: CreatCarDTO) {
    this.carsService.create(createCarDTO);
  }

  @Get()
  findAll(): Promise<Car[]> {
    return this.carsService.findAll();
  }
}
