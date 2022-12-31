import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavodyPageRoutingModule } from './navody-routing.module';

import { NavodyPage } from './navody.page';
import { CallbackPipe } from 'src/app/callback.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavodyPageRoutingModule
  ],
  declarations: [NavodyPage, CallbackPipe]
})
export class NavodyPageModule {}
