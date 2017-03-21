import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AngularFireModule } from 'angularfire2';
import { SignupComponent } from './signup/signup.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDbgCmqtOmDJ9wWsoxvHmTctUMqa1dW7Mk",
    authDomain: "simplescavange.firebaseapp.com",
    databaseURL: "https://simplescavange.firebaseio.com",
    storageBucket: "simplescavange.appspot.com",
    messagingSenderId: "549702088749"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
