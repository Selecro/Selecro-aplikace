import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VnitrekPageRoutingModule } from './vnitrek-routing.module';
import { VnitrekPage } from './vnitrek.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VnitrekPageRoutingModule
  ],
  declarations: [VnitrekPage]
})
export class VnitrekPageModule { }