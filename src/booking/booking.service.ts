import { Injectable, HttpStatus } from '@nestjs/common';
import { Booking } from './entities/booking.entity';
import { DataSourceService } from '../datasource/datasource.service';

@Injectable()
export class BookingService {
  constructor(private readonly datasourceService: DataSourceService) {}

  create(booking: Booking): Booking {
    this.datasourceService.getBookings().push(booking);
    return booking;
  }

  findOne(id: number): Booking {
    return this.datasourceService.getBookings().find((booking) => booking.id === id);
  }

  findAll(): Booking[] {
    return this.datasourceService.getBookings();
  }

  update(id: number, updatedBooking: Booking): Booking {
    const index = this.datasourceService.getBookings().findIndex((booking) => booking.id === id);
    this.datasourceService.getBookings()[index] = updatedBooking;
    return this.datasourceService.getBookings()[index];
  }

  remove(id: number): HttpStatus {
    const index = this.datasourceService.getBookings().findIndex((booking) => booking.id === id);
    this.datasourceService.getBookings().splice(index, 1);
    return HttpStatus.OK;
  }
}
