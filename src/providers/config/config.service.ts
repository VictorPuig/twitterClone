import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class ConfigService {

  constructor(private _http: Http) { }

  getConfig() {
    console.log("DAWD");
    
      const url = 'src/app/config.json';
      return this._http.get(url)
            .map((res: Response) => res.json());
  }
}
