import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavodyPageRoutingModule } from './navody-routing.module';

import { NavodyPage } from './navody.page';
import { CallbackPipe } from 'src/app/callback.pipe';
import { SearchPipe } from 'src/app/search.pipe';
import { PremiovePipe } from 'src/app/premiove.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavodyPageRoutingModule
  ],

  declarations: [NavodyPage, CallbackPipe, SearchPipe, PremiovePipe]
})
export class NavodyPageModule { }