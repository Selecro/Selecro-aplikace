import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KratkySloupekPage } from './kratky-sloupek.page';

const routes: Routes = [
  {
    path: '',
    component: KratkySloupekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KratkySloupekPageRoutingModule {}
