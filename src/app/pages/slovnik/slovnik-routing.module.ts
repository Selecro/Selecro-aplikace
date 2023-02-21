import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlovnikPage } from './slovnik.page';

const routes: Routes = [
  {
    path: '',
    component: SlovnikPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlovnikPageRoutingModule { }