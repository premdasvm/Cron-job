import { forwardRef, Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskScheduleModule } from './task-schedule/task-schedule.module';

@Module({
  imports: [ScheduleModule.forRoot(), forwardRef(() => TaskScheduleModule)],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
