import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PomuckyPage } from './pomucky.page';

const routes: Routes = [
  {
    path: '',
    component: PomuckyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PomuckyPageRoutingModule { }