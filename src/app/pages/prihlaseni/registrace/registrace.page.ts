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
  language: Language;
  username: string;
  usernameRegEx = new RegExp('^[a-zA-Z0-9_.-]{4,20}$');
  emailRegEx = new RegExp('[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}');
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
    if ((this.password0 == this.password1) && (this.passwordRegEx.test(this.password0) == true) && (this.passwordRegEx.test(this.password1) == true)) {
      return true;
    }
    return false;
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
    if ((this.usernameCheck() == true) && (this.emailCheck() == true) && (this.passwordCheck() == true)) {
      const body = {
        email: this.email,
        password: this.password0,
        username: this.username,
        language: this.language,
      };
      const loading = await this.loadingController.create({
        message: 'Please wait...',
      });
      try {
        await loading.present();
        axios.post('http://' + environment.APIHOST + ':' + environment.APIPORT + '/signup', body).then(response => {
          this.router.navigateByUrl('/prihlaseni');
        }).catch(error => {
          console.error(error);
        });
        await loading.dismiss();
      }
      catch(error) {
        console.error(error);
      }
    }
  }
}
