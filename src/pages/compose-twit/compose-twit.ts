import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { TwitsService } from '../../providers/twits/twits.service';

@IonicPage()
@Component({
  selector: 'page-compose-twit',
  templateUrl: 'compose-twit.html',
})
export class ComposeTwitPage {
  private twitForm : FormGroup;

  user: any; //canviar per usuari registrat

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public twitsService: TwitsService) {
    this.user = {};
    this.user.name = "Victor Puigcerver"
    this.user.acc = "@VictorPuigcer"

    this.twitForm = this.formBuilder.group({
      description: ['']
    });
  }

  sendTwit() {
    console.log(this.twitForm.value);
    let twit: any = {};
    twit.author = this.user.acc;
    twit.text = this.twitForm.value.description;
    //twit.img = this.user.img
    this.twitsService.postTwit(twit).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComposeTwitPage');
  }

}
