import { PassengerService } from './passenger.service';
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Passenger } from './entities/passenger.entity';

@Controller('passengers')
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  @Get()
  findAll(): Passenger[] {
    return this.passengerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Passenger {
    return this.passengerService.findOne(id);
  }

  @Post()
  create(@Body() createPassenger: Passenger): Passenger {
    return this.passengerService.create(createPassenger);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatePassenger: Passenger): Passenger {
    return this.passengerService.update(id, updatePassenger);
  }

  @Delete(':id')
  remove(@Param('id') id: number): void {
    this.passengerService.remove(id);
  }
}
