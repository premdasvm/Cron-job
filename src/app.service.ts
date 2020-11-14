import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { TaskScheduleService } from './task-schedule/task-schedule.service';

@Injectable()
export class AppService {
  constructor(
    @Inject(forwardRef(() => TaskScheduleService))
    private taskScheduler: TaskScheduleService,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  scheduled() {
    console.log('Executed.....');
  }
}
