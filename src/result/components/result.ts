import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { ISurvey } from '../../survey/models/survey';
import { SurveyService } from '../../survey/services/survey-service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'result',
  styles: [
  ],
  template: require('./result.html')
})

export class ResultComponent {
  surveys: FirebaseListObservable<ISurvey[]>;
  constructor(private surveyService: SurveyService) {
    this.surveys = surveyService.getSurveys();
  }
}
