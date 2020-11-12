import { Module } from '@nestjs/common';
import { TaskScheduleService } from './task-schedule.service';

@Module({
  providers: [TaskScheduleService],
  exports: [TaskScheduleService],
})
export class TaskScheduleModule {}
