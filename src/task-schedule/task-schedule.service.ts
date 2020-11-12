import { Injectable, Logger } from '@nestjs/common';
import { Cron, SchedulerRegistry } from '@nestjs/schedule';

@Injectable()
export class TaskScheduleService {
  constructor(private schedulerRegistry: SchedulerRegistry) {}
  private readonly logger = new Logger(TaskScheduleService.name);

  @Cron(new Date(2020, 11, 13, 24, 7))
  handleCron() {
    this.logger.debug('Called when the current second is 45');
  }

  addCronJob(name: string, seconds: string) {
    const job = new CronJob(`${seconds} * * * * *`, () => {
      this.logger.warn(`time (${seconds}) for job ${name} to run!`);
    });

    this.schedulerRegistry.addCronJob(name, job);
    job.start();

    this.logger.warn(
      `job ${name} added for each minute at ${seconds} seconds!`,
    );
  }
}
