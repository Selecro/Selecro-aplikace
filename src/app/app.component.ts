import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent { 
  constructor(public translate: TranslateService ) {
    translate.addLangs(['CZ', 'EN']);
    translate.setDefaultLang('CZ');
  }
  public switchLanguage(lang:string) {
    return this.translate.use(lang);
  }
}
