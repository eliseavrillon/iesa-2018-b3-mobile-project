import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';

@NgModule({
  declarations: [
    MyApp,
    ProfilePage
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  ],
  entryComponents: [
    ProfilePage,
  ]
})
export class ProfilePageModule {}
