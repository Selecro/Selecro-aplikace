import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VyukovyModPageRoutingModule } from './vyukovy-mod-routing.module';

import { VyukovyModPage } from './vyukovy-mod.page';
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
    VyukovyModPageRoutingModule,
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
  declarations: [VyukovyModPage]
})
export class VyukovyModPageModule { }