import {Injectable } from '@nestjs/common';
import { students, teachers } from 'src/db';
import { StudentDTO, TeacherDTO } from './student.dto';

@Injectable()
export class StudentService {

	private students = students;
	private teachers = teachers;

	getStudents(): StudentDTO[] {
		return this.students;
	}

	getStudent(studentId: number): StudentDTO {
		const student = this.students.find(student => (student.id == studentId))
		console.log(student)
		return student;
	}

	createStudent(body): StudentDTO {
		const id = Math.floor(Math.random() * 10 + 1)
		const duplicated = this.students.some(student => (student.name == body.name || student.id == id))
		if(duplicated) return;
		this.students.push({...body, id: id})

		return {...body, id };
	}

	updateStudent(body, studentId: number): StudentDTO[] {
		const newStudent= this.students.map(student => {
			if(student.id == studentId) {
				student.name = body.name;
				student.teacher = body.teacher;
			} 
				return student
		})

		this.students = newStudent;

		return newStudent;
	}

	getStudentsTeacher(studentId: number): any {
		// get the student info
		const studentInfo = this.students.find(student => student.id == studentId);

		const studentsTeacher = this.teachers.find(teacher => teacher.id == studentInfo.teacher);

		console.log({student: studentInfo, teacher: studentsTeacher})
		return {student: studentInfo, teacher: studentsTeacher};

		// return studentsTeacher;
	}
}
