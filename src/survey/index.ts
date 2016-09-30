import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth';

import { SurveyFormComponent } from './components/survey-form';
import { SurveyService } from './services/survey-service';

const routes: Routes = [
  {path: 'survey', component: SurveyFormComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    SurveyFormComponent
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

export class SurveyModule {}