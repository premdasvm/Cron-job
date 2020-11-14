import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';

import { CronJob } from 'cron';
import { JobsService } from 'src/jobs/jobs.service';

@Injectable()
export class TaskScheduleService {
  constructor(
    private schedulerRegistry: SchedulerRegistry,
    private jobService: JobsService,
  ) {}
  private readonly logger = new Logger(TaskScheduleService.name);

  addCronJob(
    name: string,
    dateTime: {
      year: number;
      month: number;
      day: number;
      hour: number;
      min: number;
    },
  ) {
    const { year, month, day, hour, min } = dateTime;
    // (year, month, day, hour, min, 0) !! 0- jan & 11- dec
    const ScheduledDate = new Date(year, month, day, hour, min, 0);

    const job = new CronJob(ScheduledDate, () => {
      this.logger.warn(`Job ${name} Executed`);
      this.jobService.schedule();
    });

    this.schedulerRegistry.addCronJob(name, job);
    job.start();

    this.logger.warn(`Job ${name} Added Successfully`);
  }

  deleteCron(name: string) {
    this.schedulerRegistry.deleteCronJob(name);
    this.logger.warn(`job ${name} deleted!`);
  }

  viewDetails(name: string) {
    const job = this.schedulerRegistry.getCronJob(name);
    console.log(job.nextDates().toDate());
  }
}
