import { Routes } from '@angular/router';
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {MentalStateExamsComponent} from "./nursing/pages/mental-state-exams/mental-state-exams.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'nursing/mental-state-exams', component: MentalStateExamsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];
