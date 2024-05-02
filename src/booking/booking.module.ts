import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { DataSourceModule } from 'src/datasource/datasource.module';


@Module({
  controllers: [BookingController],
  providers: [BookingService],
  imports: [DataSourceModule],
})
export class BookingModule {}