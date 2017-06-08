import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { DataService } from '../services/data/data.service';
import { ConfigService } from '../services/config/config.service';
import { TwitsService } from '../services/twits/twits.service';

import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { ComposeTwitPage } from '../pages/compose-twit/compose-twit';
import { TwitComponent } from '../components/twit/twit';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    ComposeTwitPage,
    TwitComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ComposeTwitPage,
    ProfilePage
  ],
  providers: [
    DataService,
    ConfigService,
    TwitsService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
