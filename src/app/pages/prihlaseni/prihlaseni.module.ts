import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrihlaseniPageRoutingModule } from './prihlaseni-routing.module';

import { PrihlaseniPage } from './prihlaseni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrihlaseniPageRoutingModule
  ],
  declarations: [PrihlaseniPage]
})
export class PrihlaseniPageModule { }