import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import axios from 'axios';
import { environment } from 'src/environments/environment.prod';

enum Language {
  CZ = 'CZ',
  EN = 'EN'
}

@Component({
  selector: 'app-registrace',
  templateUrl: './registrace.page.html',
  styleUrls: ['./registrace.page.scss'],
})
export class RegistracePage implements OnInit {
  passwordToggleIcon = "eye";
  passwordToggleIcon2 = "eye";
  showPassword0: boolean;
  showPassword1: boolean;
  email: string;
  password0: string;
  password1: string;
  language: Language = Language.EN;
  username: string;
  usernameRegEx = new RegExp('^[a-zA-Z0-9_.-]{4,20}$');
  emailRegEx = new RegExp('[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,4}');
  passwordRegEx = new RegExp('^[a-zA-Z0-9?!.,_-]{8,20}$');

  constructor(private router: Router, private loadingController: LoadingController) { }

  ngOnInit() {
  }

  public usernameCheck(): boolean {
    return this.usernameRegEx.test(this.username);
  }

  public emailCheck(): boolean {
    return this.emailRegEx.test(this.email);
  }

  public passwordCheck(): boolean {
    return (this.password0 == this.password1) && this.passwordRegEx.test(this.password0) && this.passwordRegEx.test(this.password1)
  }

  public togglePassword() {
    this.showPassword0 = !this.showPassword0;
    if (this.passwordToggleIcon == 'eye') {
      this.passwordToggleIcon = 'eye-off';
    }
    else {
      this.passwordToggleIcon = 'eye';
    }
  }

  public togglePassword2() {
    this.showPassword1 = !this.showPassword1;
    if (this.passwordToggleIcon2 == 'eye') {
      this.passwordToggleIcon2 = 'eye-off';
    }
    else {
      this.passwordToggleIcon2 = 'eye';
    }
  }

  public async register() {
    if (this.usernameCheck() && this.emailCheck()) {
      const body = {
        email: this.email,
        password: this.password0,
        username: this.username,
        language: this.language,
      };
      delete this.password0;
      delete this.password1;
      const loading = await this.loadingController.create({
        message: 'Please wait...',
      });
      try {
        await loading.present();
        axios.post(environment.APIHOST + ':' + Number(environment.APIPORT) + '/signup', body).then(response => {
          this.router.navigateByUrl('/prihlaseni');
        }).catch(error => {
          //Tady bude kus kodu od Anet
          ///console.error(error);
        });
        await loading.dismiss();
      }
      catch (error) {
        //Tady bude kus kodu od Anet
        ///console.error(error);
      }
      await loading.dismiss();
    }
    else if (!this.usernameCheck()) {
      //Tady bude kus kodu od Anet
    }
    else if (!this.emailCheck()) {
      //Tady bude kus kodu od Anet
    }
    else if (!this.passwordCheck()) {
      //Tady bude kus kodu od Anet
    }
  }
}
