import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PevneOkoPage } from './pevne-oko.page';

const routes: Routes = [
  {
    path: '',
    component: PevneOkoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PevneOkoPageRoutingModule {}
