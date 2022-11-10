import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VyukovyModPage } from './vyukovy-mod.page';

const routes: Routes = [
  {
    path: '',
    component: VyukovyModPage
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VyukovyModPageRoutingModule {}
