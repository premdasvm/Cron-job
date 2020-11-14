import { Controller, Get } from '@nestjs/common';
import { TaskScheduleService } from 'src/task-schedule/task-schedule.service';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private jobService: JobsService) {}

  @Get('start')
  startSchedule() {
    return this.jobService.startSchedule();
  }
}
