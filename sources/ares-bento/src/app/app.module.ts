import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule  } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { AuditPage } from '../pages/audit/audit';
//import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
//import { LancerauditPage } from '../pages/lanceraudit/lanceraudit';

//import { Calendar } from '@ionic-native/calendar';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { Media } from '@ionic-native/media';
import { File } from '@ionic-native/file';

import { AuthService } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  //  AuditPage,
  //  ProfilePage,
    RegisterPage,
  //  LancerauditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  //  AuditPage,
//    ProfilePage,
    RegisterPage,
  //  LancerauditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    AuthService,
    Media,
    File,
    //Calendar,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
})
export class AppModule {}
