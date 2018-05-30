import { Component } from '@angular/core';
import { ProfilePage } from '../profile/profile';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onClick() {
    this.navCtrl.push(ProfilePage);
    console.log('clicked')
  }

}
