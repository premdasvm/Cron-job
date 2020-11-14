import { Injectable } from '@nestjs/common';
import { TaskScheduleService } from 'src/task-schedule/task-schedule.service';

@Injectable()
export class JobsService {
  constructor(private taskScheduleService: TaskScheduleService) {}

  schedule() {
    console.log('Executing...');
  }

  startSchedule() {
    return this.taskScheduleService.addCronJob('test', {
      year: 2020,
      month: 10,
      day: 14,
      hour: 10,
      min: 58,
    });
  }
}
