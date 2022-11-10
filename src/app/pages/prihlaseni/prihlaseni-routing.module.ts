import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrihlaseniPage } from './prihlaseni.page';

const routes: Routes = [
  {
    path: '',
    component: PrihlaseniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrihlaseniPageRoutingModule {}
