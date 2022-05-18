import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetizkoveOkoPageRoutingModule } from './retizkove-oko-routing.module';

import { RetizkoveOkoPage } from './retizkove-oko.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetizkoveOkoPageRoutingModule
  ],
  declarations: [RetizkoveOkoPage]
})
export class RetizkoveOkoPageModule {}
