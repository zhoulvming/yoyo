import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SubnavComponent } from './components/subnav/subnav.component';
import { YoyolistComponent } from './components/yoyolist/yoyolist.component';
import { YoyoinfComponent } from './components/yoyoinf/yoyoinf.component';
import { ManageComponent } from './components/manage/manage.component';

import { YoyoService } from './services/yoyo.service';

import { routing } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    SubnavComponent,
    YoyolistComponent,
    ManageComponent,
    YoyoinfComponent,
    YoyoinfComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [YoyoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
