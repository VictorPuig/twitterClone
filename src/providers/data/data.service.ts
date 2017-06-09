import { Injectable } from '@angular/core';
import { Config } from '../../interfaces/config.interface';
import { User } from '../../clases/user.class'
@Injectable()
export class DataService {
  private config: Config;
  private user: User;

  constructor() { }

    setConfig(val) {
        this.config = val;
    }

    getConfig() {
        return this.config;
    }

    setUser(user) {
        this.user = user;
    }

    getUser() {
        return this.user;
    }
}
