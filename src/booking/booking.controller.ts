import { BookingService } from './booking.service';
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Booking } from './entities/booking.entity';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Get()
  findAll(): Booking[] {
    return this.bookingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Booking {
    return this.bookingService.findOne(id);
  }

  @Post()
  create(@Body() createBooking: Booking): Booking {
    return this.bookingService.create(createBooking);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateBooking: Booking): Booking {
    return this.bookingService.update(id, updateBooking);
  }

  @Delete(':id')
  remove(@Param('id') id: number): void {
    this.bookingService.remove(id);
  }
}
