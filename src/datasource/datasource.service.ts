
import { Injectable } from '@nestjs/common';
import { Flight } from 'src/flight/entities/flight.entity';
import { Booking } from 'src/booking/entities/booking.entity';
import { Passenger } from 'src/passenger/entities/passenger.entity';

@Injectable()
export class DataSourceService {
  private flights: Flight[] = [];
  private bookings: Booking[] = [];
  private passengers: Passenger[] = [];

  getFlights(): Flight[] {
    return this.flights;
  }
  
  getBookings(): Booking[] {
    return this.bookings;
  }
  
  getPassengers(): Passenger[] {
    return this.passengers;
  }
}