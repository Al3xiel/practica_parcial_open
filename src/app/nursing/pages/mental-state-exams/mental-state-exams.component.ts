import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {ExamCardListComponent} from "../../components/exam-card-list/exam-card-list.component";

@Component({
  selector: 'app-mental-state-exams',
  standalone: true,
  imports: [
    TranslateModule,
    ExamCardListComponent
  ],
  templateUrl: './mental-state-exams.component.html',
  styleUrl: './mental-state-exams.component.css'
})
export class MentalStateExamsComponent {

}
