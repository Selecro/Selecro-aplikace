import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavodyPageRoutingModule } from './navody-routing.module';

import { NavodyPage } from './navody.page';
import { ApplicationPipesModuleModule } from 'src/app/application-pipes-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavodyPageRoutingModule,
    ApplicationPipesModuleModule
  ],

  declarations: [NavodyPage]
})
export class NavodyPageModule { }