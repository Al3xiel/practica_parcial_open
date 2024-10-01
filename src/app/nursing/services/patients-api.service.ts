import { Injectable } from '@angular/core';
import {Patient} from "../model/patient.entity";
import {BaseService} from "../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class PatientsApiService extends BaseService<Patient> {
  constructor() {
    super();
    this.resourceEndPoint = '/patients';
  }
}
