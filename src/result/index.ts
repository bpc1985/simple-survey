import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth';

import { ResultComponent } from './components/result';
import { SurveyService } from '../survey/services/survey-service';

const routes: Routes = [
  {path: 'result', component: ResultComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    ResultComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    SurveyService
  ]
})

export class ResultModule {}