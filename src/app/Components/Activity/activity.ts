import { Course } from './../Course/course';
export class Activity {
  id: number;
  name: string;
  expirationDate: Date;
  note: number;
  valueNote: number;
  course: Course;
  //courses?: Course;
}