import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-base',
  templateUrl: 'base.html',
})
export class BasePage {
homePage: any = HomePage;
  profilePage: any = ProfilePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasePage');
  }

  pushHome() {

  }

  openProfile() {
    this.navCtrl.push(ProfilePage);
  }

}
