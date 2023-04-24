import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VyukovyModPageRoutingModule } from './vyukovy-mod-routing.module';

import { VyukovyModPage } from './vyukovy-mod.page';
import { ApplicationPipesModuleModule } from 'src/app/application-pipes-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VyukovyModPageRoutingModule,
    ApplicationPipesModuleModule
  ],
  declarations: [VyukovyModPage]
})
export class VyukovyModPageModule { }