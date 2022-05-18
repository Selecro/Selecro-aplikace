import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolodlouhySloupekPageRoutingModule } from './polodlouhy-sloupek-routing.module';

import { PolodlouhySloupekPage } from './polodlouhy-sloupek.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolodlouhySloupekPageRoutingModule
  ],
  declarations: [PolodlouhySloupekPage]
})
export class PolodlouhySloupekPageModule {}
