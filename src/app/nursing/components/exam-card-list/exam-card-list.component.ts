import {Component, inject} from '@angular/core';
import {ExamsApiService} from "../../services/exams-api.service";
import {ExaminersApiService} from "../../services/examiners-api.service";
import {PatientsApiService} from "../../services/patients-api.service";
import {MentalStateExam} from "../../model/mental-state-exam.entity";
import {Examiner} from "../../model/examiner.entity";
import {Patient} from "../../model/patient.entity";
import {ExamCardComponent} from "../exam-card/exam-card.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-exam-card-list',
  standalone: true,
  imports: [
    ExamCardComponent,
    NgForOf
  ],
  templateUrl: './exam-card-list.component.html',
  styleUrl: './exam-card-list.component.css'
})
export class ExamCardListComponent {
  private examsApiService = inject(ExamsApiService);
  private examinersApiService = inject(ExaminersApiService);
  private patientsApiService = inject(PatientsApiService);
  exams: Array<MentalStateExam> = [];
  examiners: Array<Examiner> = [];
  patients: Array<Patient> = [];

  private getAllExams() {
    this.examsApiService.getAll().subscribe((response: Array<MentalStateExam>) => {
      this.exams = response;
      this.exams.forEach((exam, index) => {
        this.examinersApiService.getById(exam.examinerId).subscribe((examiner: Examiner) => {
          this.examiners[index] = examiner;
        });
        this.patientsApiService.getById(exam.patientId).subscribe((patient: Patient) => {
          this.patients[index] = patient;
        });
      });
    }, error => {
      console.error('There was an error fetching exams!', error);
    });
  }

  ngOnInit(): void {
    this.getAllExams();
  }
}
