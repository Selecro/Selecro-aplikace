import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagickyKrouzekPage } from './magicky-krouzek.page';

const routes: Routes = [
  {
    path: '',
    component: MagickyKrouzekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagickyKrouzekPageRoutingModule {}
