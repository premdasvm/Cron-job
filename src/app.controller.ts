import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TaskScheduleService } from './task-schedule/task-schedule.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly taskService: TaskScheduleService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('start')
  startSchedule() {
    return this.taskService.addCronJob('test', {
      year: 2020,
      month: 10,
      day: 13,
      hour: 14,
      min: 19,
    });
  }

  @Get('stop')
  stopSchedule() {
    // return this.taskService.handleCron();
  }

  @Get('delete')
  deleteSchedule() {
    return this.taskService.deleteCron('deleteCron');
  }

  @Get('view')
  viewSchedule() {
    return this.taskService.viewDetails('test');
  }
}
