import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuditPage } from '../pages/audit/audit';
import { ListPage } from '../pages/list/list';
import { LancerauditPage } from '../pages/lanceraudit/lanceraudit';
import { Calendar } from '@ionic-native/calendar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { Media } from '@ionic-native/media';
import { File } from '@ionic-native/file';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AuditPage,
    ListPage,
    LancerauditPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AuditPage,
    ListPage,
    LancerauditPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    Media,
    File,
    Calendar,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
