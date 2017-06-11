import { NavController } from 'ionic-angular';
import { Component, Output, EventEmitter } from '@angular/core';
import { LoginPage } from '../../pages/login/login';
import { ProfilePage } from '../../pages/profile/profile';
import { HomePage } from '../../pages/home/home';
import { ComposeTwitPage } from '../../pages/compose-twit/compose-twit';
import { AuthService } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'nav',
  templateUrl: 'nav.html'
})
export class NavComponent {

  text: string;
  toggle: boolean
  @Output() leftPosition = new EventEmitter();

  constructor(private auth: AuthService, public navCtrl: NavController) {
    console.log('Hello NavComponent Component');
    this.toggle = true;
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage)
    });
  }

  openProfile() {
    this.navCtrl.push(ProfilePage);
  }

  openComposeTwit() {
    this.navCtrl.push(ComposeTwitPage);
  }

  togglePosition () {
    this.toggle = !this.toggle;
    this.leftPosition.emit(this.toggle);
  }

}
