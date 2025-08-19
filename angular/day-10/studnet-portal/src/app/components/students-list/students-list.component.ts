import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {StudentDetailsComponent} from "../student-details/student-details.component";
import {StudentCardComponent} from "../student-card/student-card.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {IStudent} from "../cores/interface/IStudent";

@Component({
  selector: 'app-students-list',
  standalone: true,
  imports: [FormsModule, CommonModule, StudentDetailsComponent, StudentCardComponent, RouterLink, RouterOutlet],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss'
})
export class StudentsListComponent {
  students: IStudent[];
  student: IStudent = {
    id: 0,
    name: '',
    age: 0,
    major: ''
  };

  constructor() {
    this.students = [
      {id: 1, name: 'Mahmoud', age: 22, major: 'CS'},
      {id: 2, name: 'Ahmed', age: 20, major: 'IS'},
    ];
  }

  getAllStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    this.student = this.students.find((student) => student.id === id) || this.student;
    return this.student;
  }

}
