import { forwardRef, Module } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { TaskScheduleService } from './task-schedule.service';

@Module({
  imports: [forwardRef(() => AppModule)],
  providers: [TaskScheduleService],
  exports: [TaskScheduleService],
})
export class TaskScheduleModule {}
