import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform) {
    platform.registerBackButtonAction(() => {
      console.log("backPressed 1");
    },1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  openpage(nompage) {
    this.navCtrl.setRoot(nompage);
    console.log('clicked')
  }
}
