import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import axios from 'axios';
import { environment } from 'src/environments/environment.prod';
import { AlertController } from '@ionic/angular';
import { async } from 'rxjs/internal/scheduler/async';
import { error } from 'console';

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
  emailRegEx = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$');
  passwordRegEx = new RegExp('^[a-zA-Z0-9?!.@#$%^&*_-]{8,20}$');

  constructor(private router: Router, private loadingController: LoadingController, private alertController: AlertController) { }

  ngOnInit() {
  }

  public usernameCheck(): boolean {
    return this.usernameRegEx.test(this.username);
  }

  public emailCheck(): boolean {
    return this.emailRegEx.test(this.email);
  }

  public passwordCheck(): boolean {
    return (this.password0 == this.password1) && this.passwordRegEx.test(this.password0) && this.passwordRegEx.test(this.password1);
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
    if (this.usernameCheck()) {
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
        }).catch( error => {
          console.error(error.message);
          if (error.message == "email or username already exist") {
            console.log("existuje")
            const alert = this.alertController.create({
              header: 'UPOZORNĚNÍ!',
              message: 'Vámi zadané uživatelské jméno již existuje./Vámi zadaný email již existuje.',
              buttons: ['OK'],
            })
          }
          else if (error.message == "The request body is invalid. See error object `details` property for more info.") {
            console.log("něco se pokazilo")
            const alert = this.alertController.create({
              header: 'UPOZORNĚNÍ!',
              message: 'něco se pokazilo.',
              buttons: ['OK'],
            })
          }
          else {
            console.log("nejsme dostupni")
            const alert = this.alertController.create({
              header: 'UPOZORNĚNÍ!',
              message: 'Omlouváme se, ale databáze není dostupná. Zkuste to prosím později.',
              buttons: ['OK'],
            })
          }
        });
        await loading.dismiss();
      }
      catch (error) {
        console.log("Internet");
        if (error.message == "Network Error") {
          const alert = await this.alertController.create({
            header: 'UPOZORNĚNÍ!',
            message: 'Špatné připojení k internetu!',
            buttons: ['OK'],
          })
        }
      }
      await loading.dismiss();
    }
    else if (!this.usernameCheck()) {
      console.log("delka jména")
      if (this.username?.length < 4) {
        console.log("Krátké jméno")
        const alert = await this.alertController.create({
          header: 'UPOZORNĚNÍ!',
          message: 'Vaše uživatelské jméno je příliš krátké. Minimum jsou 4 znaky.',
          buttons: ['OK'],
        })
      }
      else if (this.username?.length > 20) {
        console.log("dlouhé jmeno")
        const alert = await this.alertController.create({
          header: 'UPOZORNĚNÍ!',
          message: 'Vaše uživatelské jméno je příliš krátké. Maximum je 20 znaků.',
          buttons: ['OK'],
        })
      }
    }
    else if (!this.emailCheck()) {
      console.log("špatne email")
      const alert = await this.alertController.create({
        header: 'UPOZORNĚNÍ!',
        message: 'Špatně zadaný email.',
        buttons: ['OK'],
      })
    }
    else if (!this.passwordCheck()) {
      console.log("heslo je krátké")
      if (this.username.length < 8) {
        const alert = await this.alertController.create({
          header: 'UPOZORNĚNÍ!',
          message: 'Vaše heslo je příliš krátké. Minimum je 8 znaků.',
          buttons: ['OK'],
        })
      }
      else if (this.username.length > 20) {
        console.log("heslo je dlouhe")
        const alert = await this.alertController.create({
          header: 'UPOZORNĚNÍ!',
          message: 'Vaše heslo je příliš dlouhé. Maximum je 20.',
          buttons: ['OK'],
        })
      }
      
    }
  }
}
