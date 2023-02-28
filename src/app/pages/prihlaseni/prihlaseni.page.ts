import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prihlaseni',
  templateUrl: './prihlaseni.page.html',
  styleUrls: ['./prihlaseni.page.scss'],
})
export class PrihlaseniPage implements OnInit {
  uzivatel: HTMLElement;
  heslo: HTMLElement;
  
  public showpassword: boolean

  constructor() {
   }

  ngOnInit() {
    
  }

  public userName() {
    let sampleRegEx = new RegExp('^[a-zA-Z0-9_.-]{4,20}$');
    console.log(sampleRegEx.test("this.uzivatel"))
  }

  public password() {
    let sampleRegEx = new RegExp('^[a-zA-Z0-9?!.,_-]{8,20}$');
    console.log(sampleRegEx.test("this.prnviHeslo"));
    console.log(sampleRegEx.test("this.druheHeslo"))
  }

  public hideShowPassword() {
    this.showpassword = !this.showpassword;
  }
}