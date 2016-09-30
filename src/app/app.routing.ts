import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YoyolistComponent } from './components/yoyolist/yoyolist.component';
import { ManageComponent } from './components/manage/manage.component.ts';

const appRoutes: Routes = [
  {
    path: 'yoyolist',
    component: YoyolistComponent
  },
  {
    path: 'manage',
    component: ManageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
