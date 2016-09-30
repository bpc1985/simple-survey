import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AuthService } from 'src/auth';
import { ISurvey, Survey } from '../models/survey';

@Injectable()
export class SurveyService {
  private surveys$: FirebaseListObservable<ISurvey[]>;

  constructor(af: AngularFire, auth: AuthService) {
    this.surveys$ = af.database.list( `/surveys/${auth.id}`);
  }

  saveSurvey(name: string, age: string, colors: string[]): firebase.Promise<any> {
    return this.surveys$.push(
      new Survey(name, age, colors)
    );
  }

  getSurveys(): FirebaseListObservable<ISurvey[]> {
    return this.surveys$;
  }
}
