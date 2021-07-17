import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getStudent(studentId: string ): string {
    return `Student ID: ${studentId}`;
  }

  getStudents(): string {
    return 'All students';
  }

}
