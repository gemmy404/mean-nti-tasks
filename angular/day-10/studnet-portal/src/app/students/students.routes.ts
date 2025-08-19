import {Routes} from '@angular/router';
import {StudentsListComponent} from '../components/students-list/students-list.component';
import {StudentDetailsComponent} from '../components/student-details/student-details.component';

export const STUDENTS_ROUTES: Routes = [
  {
    path: '',
    component: StudentsListComponent,
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', component: StudentsListComponent},
      {path: 'details/:id', component: StudentDetailsComponent}
    ]
  }
];
