import { Injectable } from "@nestjs/common";
import { teachers } from "src/db";
import { TeacherDTO } from "src/student/student.dto";

@Injectable()
export class TeacherService {

	private teachers = teachers;

	getTeachers(): TeacherDTO[] {
		return this.teachers;
	}

	getTeacher(teacherId: number): TeacherDTO {
		return this.teachers.find(teacher => teacher.id == teacherId);
	}

	createTeacher(body: TeacherDTO): TeacherDTO[] {
		const id = Math.floor(Math.random() * 10 + 1);

		// check for duplicating
		const duplicated = this.teachers.some(teacher => (teacher.name == body.name || teacher.id == id));
		if(duplicated) return 

		this.teachers.push({...body, id: id});
		return this.teachers;
	}

}