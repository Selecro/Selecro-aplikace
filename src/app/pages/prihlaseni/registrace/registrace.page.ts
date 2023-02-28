import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrace',
  templateUrl: './registrace.page.html',
  styleUrls: ['./registrace.page.scss'],
})
export class RegistracePage implements OnInit {
  uzivatel: HTMLElement;
  prvniHeslo: HTMLElement;
  druheHeslo: HTMLElement;
  adresa: HTMLElement;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
 

  constructor() {
    this.uzivatel = document.getElementById("user");
    this.prvniHeslo = document.getElementById("password");
    this.druheHeslo = document.getElementById("secondPassword");
    this.adresa = document.getElementById("email");
    
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

  public email() {
    let sampleRegEx = new RegExp('[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}');
    console.log(sampleRegEx.test("this.adresa"))
  }

  public showPassword(input: any): any {
    input.type = input.type === 'password' ?  'text' : 'password';
   }

   hideShowPassword() {
       this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
       this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
   }
}
