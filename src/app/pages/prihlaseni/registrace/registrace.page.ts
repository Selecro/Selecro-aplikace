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
  showPassword = false;
  showPassword2 = false;
  passwordToggleIcon = "eye";
  passwordToggleIcon2 = "eye";
  
  constructor() {}

  ngOnInit() {
    this.uzivatel = document.getElementById("user");
    this.prvniHeslo = document.getElementById("password");
    this.druheHeslo = document.getElementById("secondPassword");
    this.adresa = document.getElementById("email");
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

  togglePassword(): void {
    this.showPassword = !this.showPassword;

    if(this.passwordToggleIcon == 'eye') {
      this.passwordToggleIcon = 'eye-off';
    }
    else {
      this.passwordToggleIcon = 'eye';
    }
  }

  togglePassword2(): void {
    this.showPassword2 = !this.showPassword2;

    if(this.passwordToggleIcon2 == 'eye') {
      this.passwordToggleIcon2 = 'eye-off';
    }
    else {
      this.passwordToggleIcon2 = 'eye';
    }
  }
}
