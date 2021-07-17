require('dotenv').config();

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EpisodeModule } from './episode/episode.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';
import { TeacherController } from './teacher/teacher.controller';
import { TeacherService } from './teacher/teacher.service';


@Module({
  // database
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGO_URI,
      synchronize: true,
      useUnifiedTopology: true,
      // entity should be registered to the dist folder where .entity.js 
      entities: ['dist/**/**.entity{.ts,.js}'],
    }),
    // add another module
    EpisodeModule
  ],

  // routes endpoints
  controllers: [StudentController, TeacherController],

  // routes logic response functions
  providers: [StudentService, TeacherService],
})
export class AppModule {}
