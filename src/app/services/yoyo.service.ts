import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import  { Yoyo } from '../models/yoyo';
import  { YoyoType } from '../models/yoyoType';

@Injectable()
export class YoyoService {

  yoyoMap: Map<string, Yoyo[]> = new Map();

  constructor(private http: Http) { }

  // 获取社区列表数据
  getYoyoListData(yoyoType): Promise<Yoyo[]> {
    let mainType = yoyoType.mainType;
    if (this.yoyoMap.has(mainType)) {
      console.log('get data from service\'s memcach');
      return Promise.resolve(this.yoyoMap.get(mainType));
    }

    // 根据不同类型获取不同社区的数据
    if (yoyoType.mainType == 'cnodejs') {
      return this.getCnodejsListData();
    } else {
      return this.getCnodejsListData();
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  // 获取CNODEJS社区列表数据
  private getCnodejsListData(): Promise<Yoyo[]> {
    return this.http.get('http://crabs.pub:3000/cnodejsList')
      .toPromise()
      .then(response => {
        console.log('get cnodejs data from server');
        let yoyos: Yoyo[] = [];
        response.json().forEach(item => {
            yoyos.push({title: item.title, date:'2016'});
        });
        this.yoyoMap.set('cnodejs', yoyos);
        return yoyos;
      })
      .catch(this.handleError)
  }
}
