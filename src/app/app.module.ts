import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PortifolioComponent } from './portifolio/portifolio.component';

import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
    apiKey: 'AIzaSyC8PxXt22TVNIjgDiad8WJlM7mhVaVmu7M',
    authDomain: 'freelancer-d4bb0.firebaseapp.com',
    databaseURL: 'https://freelancer-d4bb0.firebaseio.com',
    projectId: 'freelancer-d4bb0',
    storageBucket: 'freelancer-d4bb0.appspot.com',
    messagingSenderId: '155506013825'
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PortifolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
