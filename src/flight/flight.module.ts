import { Module } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import { DataSourceModule } from 'src/datasource/datasource.module';


@Module({
  controllers: [FlightController],
  providers: [FlightService],
  imports: [DataSourceModule],
})
export class FlightModule {}

