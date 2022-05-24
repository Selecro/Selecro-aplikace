import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StylyPage } from './styly.page';

const routes: Routes = [
  {
    path: '',
    component: StylyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StylyPageRoutingModule {}
