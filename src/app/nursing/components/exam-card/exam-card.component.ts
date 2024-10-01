import {Component, Input} from '@angular/core';
import {MentalStateExam} from "../../model/mental-state-exam.entity";
import {Examiner} from "../../model/examiner.entity";
import {Patient} from "../../model/patient.entity";
import {MatCard, MatCardContent} from "@angular/material/card";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-exam-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    TranslateModule
  ],
  templateUrl: './exam-card.component.html',
  styleUrl: './exam-card.component.css'
})
export class ExamCardComponent {
  @Input() exam!: MentalStateExam;
  @Input() examiner!: Examiner;
  @Input() patient!: Patient;
}
