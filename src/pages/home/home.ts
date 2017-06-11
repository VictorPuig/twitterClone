import { Component, OnInit, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ComposeTwitPage } from '../compose-twit/compose-twit';
import { LoginPage } from '../login/login';
import { TwitComponent } from '../../components/twit/twit';
import { DataService } from '../../providers/data/data.service';
//import { ConfigService } from '../../providers/config/config.service';
import { TwitsService } from '../../providers/twits/twits.service';
import { AuthService } from '../../providers/auth-service/auth-service';
import { User } from '../../clases/user.class';
//import { Config } from '../../interfaces/config.interface';
import 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @Input() leftPosition: boolean;
  styleClasses: any;
  twits: any[];
  user: User;
  title: string;
  
  constructor(public navCtrl: NavController, public twitsService: TwitsService, private auth: AuthService, public dataService: DataService) {
    this.title = "Home";
    let info = this.auth.getUser();
    this.leftPosition = true;
    //this.user = info;
    this.user = new User('Jason', 'mec@gmail.com', 'Jeison', null);
    this.user.username = '@' + this.user.username; //afegir aqui el @ per tenir-ho en tot moment
    this.dataService.setUser(this.user);
  }

  openComposeTwit() {
    this.navCtrl.push(ComposeTwitPage);
  }

  ngOnInit() {
    console.log("App iniciada");
  }

  getStyleClasses() {
    this.styleClasses = {
      'Spanish': this.leftPosition,
      'Arabian': !this.leftPosition
    }
    return this.styleClasses;
  }

  togglePosition (event) {
    this.leftPosition = event;
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
