import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  url: string;

  constructor(public http: Http) {
    console.log('Hello UserServiceProvider Provider');
    this.url = 'http://192.168.1.128:8082';
  }

  getUserByEmail(email: string) {
    return this.http.get(this.url + '/users/' + email)
            .map(res => res.json());
  }

  postUser(user: any) {
    return this.http.post(this.url + '/users', user)
            .map(res => res.json());
  }

}
