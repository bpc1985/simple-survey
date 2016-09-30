import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AuthModule } from '../auth';
import { FirebaseModule } from '../firebase';
import { SurveyModule } from '../survey';
import { ResultModule } from '../result';

import { AppComponent } from './components/app';
import { AppHeaderComponent } from './components/app-header';


@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {useHash: false}),
    AuthModule,
    FirebaseModule,
    SurveyModule,
    ResultModule
  ]
})

export class AppModule {}
