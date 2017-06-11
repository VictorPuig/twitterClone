import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../clases/user.class';
import { DataService } from '../../providers/data/data.service';
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  user: User;
  constructor(public navCtrl: NavController, public dataService: DataService) {
    this.user = this.dataService.getUser();
  }
}