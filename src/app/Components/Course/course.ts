import { Activity } from './../Activity/activity';
import { Student } from './../Student/student';
export class Course {
  id: number;
  name: string;
  noteGeneral: number;
  advanceGeneral: number;
  student: Student;
  activities: Activity;
}
