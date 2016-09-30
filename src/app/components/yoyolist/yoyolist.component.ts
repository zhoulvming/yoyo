import { Component, OnInit } from '@angular/core';

import { Yoyo } from '../../models/yoyo';
import { YoyoType } from '../../models/yoyoType';
import { YoyoService } from '../../services/yoyo.service';

@Component({
  selector: 'app-yoyolist',
  templateUrl: './yoyolist.component.html',
  styleUrls: ['./yoyolist.component.css']
})
export class YoyolistComponent implements OnInit {

  yoyos: Yoyo[];
  yoyoType: YoyoType = {mainType: 'cnodejs', subType: ''};

  constructor(private yoyoService: YoyoService) { }

  ngOnInit() {
    this.getYoyoList(this.yoyoType);
  }

  getYoyoList(yoyoType): void {
    this.yoyoService.getYoyoListData(yoyoType).then(yoyos => this.yoyos = yoyos);
  }

  onSelect(yoyo: Yoyo): void {
    console.log(yoyo);
  }

}
