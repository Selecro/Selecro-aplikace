import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PevneOkoPageRoutingModule } from './pevne-oko-routing.module';

import { PevneOkoPage } from './pevne-oko.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PevneOkoPageRoutingModule
  ],
  declarations: [PevneOkoPage]
})
export class PevneOkoPageModule {}
