import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import axios from 'axios';
import { environment } from 'src/environments/environment.prod';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-prihlaseni',
  templateUrl: './prihlaseni.page.html',
  styleUrls: ['./prihlaseni.page.scss'],
})
export class PrihlaseniPage implements OnInit {
  email: string;
  password: string;
  passwordToggleIcon = "eye";
  showPassword: boolean;
  usernameRegEx = new RegExp('^[a-zA-Z0-9_.-]{4,20}$');
  emailRegEx = new RegExp('[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}');
  passwordRegEx = new RegExp('^[a-zA-Z0-9?!.,_-]{8,20}$');

  constructor(private router: Router, private loadingController: LoadingController, private sessionStorage: SessionStorageService) { }

  ngOnInit() {
  }

  public usernameCheck(): boolean {
    return this.usernameRegEx.test(this.email);
  }

  public emailCheck(): boolean {
    return this.emailRegEx.test(this.email);
  }

  public passwordCheck(): boolean {
    return this.passwordRegEx.test(this.password);
  }

  public togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon == 'eye') {
      this.passwordToggleIcon = 'eye-off';
    }
    else {
      this.passwordToggleIcon = 'eye';
    }
  }

  public async login() {
    if ((this.emailCheck() || this.usernameCheck())) {
      const body = {
        email: this.email,
        passwordHash: this.password,
      };
      delete this.password;
      const loading = await this.loadingController.create({
        message: 'Please wait...',
      });
      try {
        await loading.present();
        await axios.post(environment.APIHOST + ':' + Number(environment.APIPORT) + '/users/login', body).then(response0 => {
          this.sessionStorage.store('token', response0.data.token);
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
      try {
        await axios.get(environment.APIHOST + ':' + Number(environment.APIPORT) + '/users/{id}', { headers: { Authorization: `Bearer ` + this.sessionStorage.retrieve('token')}}).then(response => {
          this.sessionStorage.store('settings', response.data);
          this.router.navigateByUrl('/home');
        }).catch(error => {
          //Tady bude kus kodu od Anet
          ///console.error(error);
        });
      }
      catch (error) {
        //Tady bude kus kodu od Anet
        ///console.error(error);
      }
      await loading.dismiss();
    }
    else if (!this.emailCheck()) {
      //Tady bude kus kodu od Anet
    }
    else if (!this.usernameCheck()) {
      //Tady bude kus kodu od Anet
    }
    else if (!this.passwordCheck()) {
      //Tady bude kus kodu od Anet
    }
  }
}