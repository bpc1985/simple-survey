/* tslint:disable:no-string-literal */

export interface ISurvey {
  $key?: string;
  completed: boolean;
  createdAt: number;
  name: string;
  age: string;
  colors: string[];
}

export class Survey implements ISurvey {
  completed: boolean = false;
  createdAt: number = firebase.database['ServerValue']['TIMESTAMP'];
  name: string;
  age: string;
  colors: string[];

  constructor(name: string, age: string, colors: string[]) {
    this.name = name;
    this.age = age;
    this.colors = colors;
  }
}
