import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { UserData } from './user-data';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Injectable()
export class NewsData {
  data: any;
  id: any;

  constructor(public http: Http, public user: UserData) { }

  load(id: any){
    if (this.data && this.data.sn === id) {
      return Observable.of(this.data);
    } else {
      return this.http.get(`https://devapi.nownews.com/news/${id}`)
        .map(this.processData, this);
    }
  }

  processData(data: any) {
    this.data = data.json();
    this.data.tracks = [];

    return this.data;
  }

  getWbs(sn: number) {
    return this.load(sn).map((data: any) => {
      console.log(data.newsList, 'L145');
      return data.newsList;
    });
  }

}
