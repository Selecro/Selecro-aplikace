import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetizkoveOkoPage } from './retizkove-oko.page';

const routes: Routes = [
  {
    path: '',
    component: RetizkoveOkoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetizkoveOkoPageRoutingModule {}
