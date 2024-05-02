import { Module } from '@nestjs/common';
import { FlightModule } from './flight/flight.module';
import { BookingModule } from './booking/booking.module';
import { PassengerModule } from './passenger/passenger.module';
import { DataSourceModule } from './datasource/datasource.module';

@Module({
  imports: [FlightModule, DataSourceModule, BookingModule, PassengerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
