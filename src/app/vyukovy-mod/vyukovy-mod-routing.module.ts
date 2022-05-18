import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VyukovyModPage } from './vyukovy-mod.page';

const routes: Routes = [
  {
    path: '',
    component: VyukovyModPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VyukovyModPageRoutingModule {}
