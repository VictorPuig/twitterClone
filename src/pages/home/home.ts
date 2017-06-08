import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ComposeTwitPage } from '../compose-twit/compose-twit';
import { TwitComponent } from '../../components/twit/twit'
//import { DataService } from '../../services/data/data.service';
//import { ConfigService } from '../../services/config/config.service';
import { TwitsService } from '../../providers/twits/twits.service';
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

  openComposeTwit() {
    this.navCtrl.push(ComposeTwitPage);
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
    );
  }

}
