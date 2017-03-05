import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyA-79GwHHzC9PPvYysbPHuJsecpBsvtbbM",
    authDomain: "project--4344580214366654829.firebaseapp.com",
    databaseURL: "https://project--4344580214366654829.firebaseio.com",
    storageBucket: "project--4344580214366654829.appspot.com",
    messagingSenderId: "686225003621"
  };
  firebase.initializeApp(config);

  
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
