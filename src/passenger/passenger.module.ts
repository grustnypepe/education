import { Module } from '@nestjs/common';
import { PassengerService } from './passenger.service';
import { PassengerController } from './passenger.controller';
import { DataSourceModule } from 'src/datasource/datasource.module';


@Module({
  controllers: [PassengerController],
  providers: [PassengerService],
  imports: [DataSourceModule],
})
export class PassengerModule {}