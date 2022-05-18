import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagickyKrouzekPageRoutingModule } from './magicky-krouzek-routing.module';

import { MagickyKrouzekPage } from './magicky-krouzek.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MagickyKrouzekPageRoutingModule
  ],
  declarations: [MagickyKrouzekPage]
})
export class MagickyKrouzekPageModule {}
