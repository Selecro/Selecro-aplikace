import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistracePageRoutingModule } from './registrace-routing.module';

import { RegistracePage } from './registrace.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistracePageRoutingModule
  ],
  declarations: [RegistracePage]
})
export class RegistracePageModule {}
