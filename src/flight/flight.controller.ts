import { FlightService } from './flight.service';
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Flight } from './entities/flight.entity';

@Controller('flights')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Get()
  findAll(): Flight[] {
    return this.flightService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Flight {
    return this.flightService.findOne(id);
  }

  @Post()
  create(@Body() createFlight: Flight): Flight {
    return this.flightService.create(createFlight);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateFlight: Flight): Flight {
    return this.flightService.update(id, updateFlight);
  }

  @Delete(':id')
  remove(@Param('id') id: number): void {
    this.flightService.remove(id);
  }
}
