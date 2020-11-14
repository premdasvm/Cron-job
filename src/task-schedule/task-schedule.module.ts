import { forwardRef, Module } from '@nestjs/common';
import { JobsModule } from 'src/jobs/jobs.module';
import { TaskScheduleService } from './task-schedule.service';

@Module({
  imports: [forwardRef(() => JobsModule)],
  providers: [TaskScheduleService],
  exports: [TaskScheduleService],
})
export class TaskScheduleModule {}
