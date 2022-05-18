import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RozhackovaniPageRoutingModule } from './rozhackovani-routing.module';

import { RozhackovaniPage } from './rozhackovani.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RozhackovaniPageRoutingModule
  ],
  declarations: [RozhackovaniPage]
})
export class RozhackovaniPageModule {}
