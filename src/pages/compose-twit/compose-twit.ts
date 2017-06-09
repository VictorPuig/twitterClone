import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { TwitsService } from '../../providers/twits/twits.service';
import { DataService } from '../../providers/data/data.service';
import { User } from '../../clases/user.class';

@IonicPage()
@Component({
  selector: 'page-compose-twit',
  templateUrl: 'compose-twit.html',
})
export class ComposeTwitPage {
  private twitForm : FormGroup;

  user: User; //canviar per usuari registrat

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public twitsService: TwitsService, public dataService: DataService) {
    this.twitForm = this.formBuilder.group({
      description: ['']
    });
  }

  ngOnInit() {
    this.user = this.dataService.getUser();
  }

  sendTwit() {
    console.log(this.twitForm.value);
    let twit: any = {};
    twit.author = this.user.username;
    twit.text = this.twitForm.value.description;
    //twit.img = this.user.img
    this.twitsService.postTwit(twit).subscribe(
      response => {
        console.log(response);
      }
    );
    if (this.navCtrl.canGoBack) this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComposeTwitPage');
  }

}
