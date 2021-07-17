import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { StudentDTO, TeacherDTO } from './student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {

	constructor (private readonly studentService: StudentService) {}

	@Get() 
	getStudents(): StudentDTO[] {
		return this.studentService.getStudents();
	}

	@Get('/:studentId')
	getStudent(@Param('studentId') studentId: number): StudentDTO {
		return this.studentService.getStudent(studentId);
	}

	@Post()
	creatStudent(@Body() body): StudentDTO{
		return this.studentService.createStudent(body);
	}

	@Put('/:studentId')
	updateStudent(@Body() body, @Param('studentId') studentId: number): StudentDTO[]{
		return this.studentService.updateStudent(body, studentId);
	}

	// request to see who is the teacher of the student
	@Get('/teacher/:studentId')
	getStudentsTeacher(@Param('studentId') studentId: number): any {
		return this.studentService.getStudentsTeacher(studentId);
	}

}
