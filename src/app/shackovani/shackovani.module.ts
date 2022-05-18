import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShackovaniPageRoutingModule } from './shackovani-routing.module';

import { ShackovaniPage } from './shackovani.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShackovaniPageRoutingModule
  ],
  declarations: [ShackovaniPage]
})
export class ShackovaniPageModule {}
