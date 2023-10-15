import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-cars.dto';

@ApiTags('cars')
@Controller('cars')
export class CarsController {
  constructor(private readonly carService: CarsService) {}

  @Post()
  async create(@Res() response: Response, @Body() createCarDto: CreateCarDto) {
    try {
      const result = await this.carService.create(createCarDto);
      return response.status(HttpStatus.CREATED).json({
        message: '',
        error: false,
        data: result,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: [error.message],
        error: true,
        data: null,
      });
    }
  }

  @Get()
  async findAll(@Res() response: Response) {
    try {
      const result = await this.carService.findAll();
      return response.status(HttpStatus.OK).json({
        message: '',
        error: false,
        data: result,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: [error.message],
        error: true,
        data: null,
      });
    }
  }

  @Get(':id')
  async findOne(@Res() response: Response, @Param('id') id: string) {
    try {
      const result = await this.carService.findOne(id);
      return response.status(HttpStatus.OK).json({
        message: '',
        error: false,
        data: result,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: [error.message],
        error: true,
        data: null,
      });
    }
  }

  @Delete(':id')
  async remove(@Res() response: Response, @Param('id') id: string) {
    try {
      const result = await this.carService.remove(id);
      if (!result) {
        throw Error('ID not found');
      }
      return response.status(HttpStatus.NO_CONTENT).send();
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: [error.message],
        error: true,
        data: null,
      });
    }
  }
}
