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
    return this.taskService.handleCron();
  }

  @Get('stop')
  stopSchedule() {
    //
  }

  @Get('delete')
  deleteSchedule() {
    //
  }
}
