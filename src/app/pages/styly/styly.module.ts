import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StylyPageRoutingModule } from './styly-routing.module';

import { StylyPage } from './styly.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StylyPageRoutingModule
  ],
  declarations: [StylyPage]
})
export class StylyPageModule {}
