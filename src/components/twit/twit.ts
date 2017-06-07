import { Component, Input, OnInit } from '@angular/core';

/**
 * Generated class for the TwitComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'twit',
  templateUrl: 'twit.html'
})
export class TwitComponent {

  @Input()
  twit: any;

  text: string;
  img: string;
  title: string;
  time: Number;

  constructor() {
    //this.text = "These handsome men will take on @NiPGaming (with two CIS stand-ins) in @ecsleague Season 3 today Let's get hyped, #G2ARMY! 👊 ";
  }

  ngOnInit() {
  }

}
