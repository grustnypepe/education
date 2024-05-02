
import { Injectable, HttpStatus } from '@nestjs/common';
import { Flight } from './entities/flight.entity';
import { DataSourceService } from '../datasource/datasource.service';

@Injectable()
export class FlightService {
  constructor(private readonly datasourceService: DataSourceService) {}

  create(flight: Flight): Flight {
    this.datasourceService.getFlights().push(flight);
    return flight;
  }

  findOne(id: number): Flight {
    return this.datasourceService.getFlights().find((flight) => flight.id === id);
  }

  findAll(): Flight[] {
    return this.datasourceService.getFlights();
  }

  update(id: number, updatedFlight: Flight): Flight {
    const index = this.datasourceService.getFlights().findIndex((flight) => flight.id === id);
    this.datasourceService.getFlights()[index] = updatedFlight;
    return this.datasourceService.getFlights()[index];
  }

  remove(id: number): HttpStatus {
    const index = this.datasourceService.getFlights().findIndex((flight) => flight.id === id);
    this.datasourceService.getFlights().splice(index, 1);
    return HttpStatus.OK;
  }
}
