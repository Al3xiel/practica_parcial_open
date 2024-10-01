import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Examiner} from "../model/examiner.entity";

@Injectable({
  providedIn: 'root'
})
export class ExaminersApiService extends BaseService<Examiner> {

  constructor() {
    super();
    this.resourceEndPoint = '/examiners';
  }
}
