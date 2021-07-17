import { Body, Controller, Get, Param ,Put, Post} from '@nestjs/common';
import { TeacherDTO } from 'src/student/student.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {

	constructor(private readonly teacherService: TeacherService) {}

	@Get() 
	getTeachers(): TeacherDTO[] {
		return this.teacherService.getTeachers();
	}

	@Get('/:teacherId')
	getTeacher(@Param('teacherId') teacherId: number): TeacherDTO {
		return this.teacherService.getTeacher(teacherId);
	} 

	@Post()
	createTeacher(@Body() body: TeacherDTO): TeacherDTO[] {
		return this.teacherService.createTeacher(body);
	}

}