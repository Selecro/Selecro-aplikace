import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VnitrekPage } from './vnitrek.page';

const routes: Routes = [
  {
    path: '',
    component: VnitrekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VnitrekPageRoutingModule {}
