import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { TwitComponent } from '../../components/twit/twit'
//import { DataService } from '../../services/data/data.service';
//import { ConfigService } from '../../services/config/config.service';
import { TwitsService } from '../../services/twits/twits.service';
import { Config } from '../../interfaces/config.interface';
import 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  profilePage:any = ProfilePage;

  //config: Config;

  twits: any[];
  
  constructor(public navCtrl: NavController, public twitsService: TwitsService) {

  }

  openProfile() {
    this.navCtrl.push(ProfilePage);
  }

  ngOnInit() {
    console.log("App iniciada");
  }
  ionViewWillEnter() {
    this.twitsService.getTwits().subscribe(
      twits => {
        console.log(twits);
        
        this.twits = twits;
      }
    )
  }

}
