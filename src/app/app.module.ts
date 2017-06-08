import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { DataService } from '../providers/data/data.service';
import { ConfigService } from '../providers/config/config.service';
import { TwitsService } from '../providers/twits/twits.service';

import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ComposeTwitPage } from '../pages/compose-twit/compose-twit';
import { TwitComponent } from '../components/twit/twit';
import { AuthService } from '../providers/auth-service/auth-service';
import { UserService } from '../providers/user-service/user-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    ComposeTwitPage,
    LoginPage,
    RegisterPage,
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
    LoginPage,
    RegisterPage,
    ComposeTwitPage,
    ProfilePage
  ],
  providers: [
    DataService,
    ConfigService,
    TwitsService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    UserService
  ]
})
export class AppModule {}
