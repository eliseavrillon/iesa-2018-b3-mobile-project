import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Calendar } from '@ionic-native/calendar';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the LancerauditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lanceraudit',
  templateUrl: 'lanceraudit.html',
})
export class LancerauditPage {

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
    platform: Platform,
  //	private calendar: Calendar
  	) {
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LancerauditPage');
  }

/*launchCalendar() {
	this.calendar.openCalendar(new Date()).then();
}*/

openpage(nompage) {
  this.navCtrl.setRoot(nompage);
  console.log('clicked')
}


}
