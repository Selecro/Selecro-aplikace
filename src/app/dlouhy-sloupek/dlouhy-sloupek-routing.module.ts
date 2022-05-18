import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DlouhySloupekPage } from './dlouhy-sloupek.page';

const routes: Routes = [
  {
    path: '',
    component: DlouhySloupekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DlouhySloupekPageRoutingModule {}
