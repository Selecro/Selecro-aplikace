import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor( public translate: TranslateService ) {
    translate.addLangs(['CZ', 'EN']);
    translate.setDefaultLang('CZ');
  }
  public switchLanguage(lang:string) {
    return this.translate.use(lang);
  }
}