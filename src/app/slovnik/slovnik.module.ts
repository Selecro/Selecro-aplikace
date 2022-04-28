import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlovnikPageRoutingModule } from './slovnik-routing.module';

import { SlovnikPage } from './slovnik.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlovnikPageRoutingModule
  ],
  declarations: [SlovnikPage]
})
export class SlovnikPageModule {}
