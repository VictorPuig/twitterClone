import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Config } from '../../interfaces/config.interface';
import { DataService } from '../data/data.service';

@Injectable()
export class TwitsService {


  constructor(private _http: Http) { }

  getTwits() {
    console.log("TwitsService");
    const url = 'http://192.168.1.128:8082/twits';
      return this._http.get(url)
            .map(res => res.json());
  }

}
