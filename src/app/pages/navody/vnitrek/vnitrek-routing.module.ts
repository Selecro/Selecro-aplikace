import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VnitrekPage } from './vnitrek.page';

const routes: Routes = [
  {
    path: '',
    component: VnitrekPage
  },
  {
    path: 'detail/:nazevDetailu',
    loadChildren: () => import('./detail/detail.module').then(m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VnitrekPageRoutingModule { }