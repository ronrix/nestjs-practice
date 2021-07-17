import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('students')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getStudents() {
    return this.appService.getStudents()
  }

  @Get('/:studentId')
  getStudent(@Param('studentId') studentId: string) : string {
    return this.appService.getStudent(studentId);
  }
}
