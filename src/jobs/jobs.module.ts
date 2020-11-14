import { forwardRef, Module } from '@nestjs/common';
import { TaskScheduleModule } from 'src/task-schedule/task-schedule.module';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';

@Module({
  imports: [forwardRef(() => TaskScheduleModule)],
  controllers: [JobsController],
  providers: [JobsService],
  exports: [JobsService],
})
export class JobsModule {}
