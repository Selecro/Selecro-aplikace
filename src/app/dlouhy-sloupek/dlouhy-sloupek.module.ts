import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DlouhySloupekPageRoutingModule } from './dlouhy-sloupek-routing.module';

import { DlouhySloupekPage } from './dlouhy-sloupek.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DlouhySloupekPageRoutingModule
  ],
  declarations: [DlouhySloupekPage]
})
export class DlouhySloupekPageModule {}
