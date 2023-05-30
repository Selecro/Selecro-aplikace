import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistracePage } from './registrace.page';

const routes: Routes = [
  {
    path: '',
    component: RegistracePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistracePageRoutingModule {}
