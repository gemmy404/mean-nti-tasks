import {AfterViewInit, Component, Input, OnChanges, OnInit} from '@angular/core';
import {IStudent} from "../cores/interface/IStudent";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss'
})
export class StudentDetailsComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() studentDetails: IStudent = {
    id: 0,
    name: '',
    age: 0,
    major: ''
  };

  ngOnInit() {
    console.log('ngOnInit');
    // console.log(this.students);
  }

  ngOnChanges() {
    console.log('ngOnChanges');
    console.log(this.studentDetails);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

}

