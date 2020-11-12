import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskScheduleModule } from './task-schedule/task-schedule.module';

@Module({
  imports: [ScheduleModule.forRoot(), TaskScheduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
