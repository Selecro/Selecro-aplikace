import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolodlouhySloupekPage } from './polodlouhy-sloupek.page';

const routes: Routes = [
  {
    path: '',
    component: PolodlouhySloupekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolodlouhySloupekPageRoutingModule {}
