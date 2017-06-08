import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Config } from '../../interfaces/config.interface';
import { DataService } from '../data/data.service';

@Injectable()
export class TwitsService {

  url: string;
  constructor(private _http: Http) {
    this.url = 'http://192.168.1.128:8082/twits';
   }

  getTwits() {
    console.log("TwitsService");
    
      return this._http.get(this.url)
            .map(res => res.json());
  }

  postTwit(twit: any) {
    console.log("TwitsService");
    return this._http.post(this.url, twit)
            .map(res => res.json());
  }

}
