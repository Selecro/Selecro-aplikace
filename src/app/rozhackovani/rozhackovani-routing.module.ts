import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RozhackovaniPage } from './rozhackovani.page';

const routes: Routes = [
  {
    path: '',
    component: RozhackovaniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RozhackovaniPageRoutingModule {}
