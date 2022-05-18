import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShackovaniPage } from './shackovani.page';

const routes: Routes = [
  {
    path: '',
    component: ShackovaniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShackovaniPageRoutingModule {}
