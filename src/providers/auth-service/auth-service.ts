import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { UserService } from '../user-service/user-service'

 
export class User {
  name: string;
  email: string;
  username: string;
  img: string;
 
  constructor(name: string, email: string, username: string, img: string) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.img = img;
  }
}

@Injectable()
export class AuthService {
  currentUser: User;

  constructor(public http: Http, public userService: UserService) {
    console.log('Hello AuthService Provider');
  }

  public login(credentials: any) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        this.userService.getUserByEmail(credentials.email).subscribe( 
          user => {
            let access = (credentials.password === user.password && credentials.email === user.email);
            this.currentUser = new User(user.name, user.email, user.username, user.img);
            observer.next(access);
            observer.complete();
          }
        );
      });
    }
  }

  //Efectuar aqui post users al server
  public register(credentials) {
    if (credentials.email === null || credentials.password === null || credentials.username === null || credentials.name === null) {
      return Observable.throw("Please insert credentials");
    } else {
      let user: any = {
       name: credentials.name,
       email: credentials.email, 
       username: credentials.username, 
       password: credentials.password 
      };
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        this.userService.postUser(user).subscribe(response => {
          console.log(response);
          observer.next(true);
          observer.complete();
        });
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

}
