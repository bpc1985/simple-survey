import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { SurveyService } from '../services/survey-service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'survey-form',
  styles: [
    require('./survey-form.scss')
  ],
  template: require('./survey-form.html')
})

export class SurveyFormComponent {
  name: string = '';
  age: string = '';
  colors: string[] = ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'Pink', 'Gray'];
  selectedColors: string[];

  constructor(private surveyService: SurveyService, private router: Router) {}

  submit(): void {
    const name: string = this.name.trim();
    const age: string = this.age.trim();
    const colors: string[] = this.selectedColors;
    this.surveyService.saveSurvey(name, age, colors)
      .then(() => {
        // Move to result page
         this.router.navigate(['/result']);
      });
  }
}
