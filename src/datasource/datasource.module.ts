import { Module } from '@nestjs/common';
import { DataSourceService } from './datasource.service';

@Module({
  providers: [DataSourceService], 
  exports: [DataSourceService],
})
export class DataSourceModule {}

