import { AngularFireModule, AuthMethods } from 'angularfire2';

const firebaseConfig = {
  apiKey: 'AIzaSyCQb8pAidLAEzE02upKowRcV9VUSwyM2dM',
  authDomain: 'simple-survey-89a6a.firebaseapp.com',
  databaseURL: 'https://simple-survey-89a6a.firebaseio.com',
  storageBucket: 'simple-survey-89a6a.appspot.com',
};

const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};

export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
