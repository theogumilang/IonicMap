import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {GoogleMaps} from '@ionic-native/google-maps';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Geolocation} from '@ionic-native/geolocation';
import {tabs} from '../pages/tabs/tabs'
import {PersonPage} from '../pages/person/person';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    tabs,
    PersonPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    tabs,
    PersonPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
