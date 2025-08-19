import {Component, Input} from '@angular/core';
import {IStudent} from '../cores/interface/IStudent'

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.scss'
})
export class StudentCardComponent {
  @Input() student: IStudent = {
    id: 0,
    name: '',
    age: 0,
    major: '',
  };

}
