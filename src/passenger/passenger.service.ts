import { Injectable } from '@nestjs/common';
import { Passenger } from './entities/passenger.entity';
import { DataSourceService } from '../datasource/datasource.service';

@Injectable()
export class PassengerService {
  constructor(private readonly datasourceService: DataSourceService) {}

  create(passenger: Passenger): Passenger {
    this.datasourceService.getPassengers().push(passenger);
    return passenger;
  }

  findOne(id: number): Passenger {
    return this.datasourceService.getPassengers().find(passenger => passenger.id === id);
  }

  findAll(): Passenger[] {
    return this.datasourceService.getPassengers();
  }

  update(id: number, updatedPassenger: Passenger): Passenger {
    const index = this.datasourceService.getPassengers().findIndex(passenger => passenger.id === id);
    this.datasourceService.getPassengers()[index] = updatedPassenger;
    return updatedPassenger;
  }

  remove(id: number): void {
    const index = this.datasourceService.getPassengers().findIndex(passenger => passenger.id === id);
    this.datasourceService.getPassengers().splice(index, 1);
  }
}
