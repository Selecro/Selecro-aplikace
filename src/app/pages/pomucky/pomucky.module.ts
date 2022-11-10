import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PomuckyPageRoutingModule } from './pomucky-routing.module';

import { PomuckyPage } from './pomucky.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PomuckyPageRoutingModule
  ],
  declarations: [PomuckyPage]
})
export class PomuckyPageModule {}
