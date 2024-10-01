import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {MentalStateExam} from "../model/mental-state-exam.entity";

@Injectable({
  providedIn: 'root'
})
export class ExamsApiService extends BaseService<MentalStateExam>{

  constructor() {
    super();
    this.resourceEndPoint = '/mental-state-exams';
  }
}
