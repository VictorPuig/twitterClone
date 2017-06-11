import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../clases/user.class';
import { DataService } from '../../providers/data/data.service';
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  user: User;
  @Input() leftPosition: boolean;

  styleClasses: any;
  title: string;

  constructor(public navCtrl: NavController, public dataService: DataService) {
    this.title = "Profile";
    this.leftPosition = true;
    this.user = this.dataService.getUser();
  }

  getStyleClasses() {
    this.styleClasses = {
      'Spanish': this.leftPosition,
      'Arabian': !this.leftPosition
    }
    return this.styleClasses;
  }

  togglePosition (event) {
    console.log("ADWAWD")

    this.leftPosition = event;
  }
}