import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VyukovyModPageRoutingModule } from './vyukovy-mod-routing.module';

import { VyukovyModPage } from './vyukovy-mod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VyukovyModPageRoutingModule
  ],
  declarations: [VyukovyModPage]
})
export class VyukovyModPageModule {}
