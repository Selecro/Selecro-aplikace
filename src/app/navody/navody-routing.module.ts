import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavodyPage } from './navody.page';

const routes: Routes = [
  {
    path: '',
    component: NavodyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavodyPageRoutingModule {}
