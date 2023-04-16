import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavodyPageRoutingModule } from './navody-routing.module';

import { NavodyPage } from './navody.page';
import { ApplicationPipesModuleModule } from 'src/app/application-pipes-module.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavodyPageRoutingModule,
    ApplicationPipesModuleModule,
    HttpClientModule,
    TranslateModule.forRoot({ 
      loader: { 
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],

  declarations: [NavodyPage]
})
export class NavodyPageModule { }