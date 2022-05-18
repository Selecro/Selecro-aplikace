import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KratkySloupekPageRoutingModule } from './kratky-sloupek-routing.module';

import { KratkySloupekPage } from './kratky-sloupek.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KratkySloupekPageRoutingModule
  ],
  declarations: [KratkySloupekPage]
})
export class KratkySloupekPageModule {}
