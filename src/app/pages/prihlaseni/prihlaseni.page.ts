import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import axios from 'axios';
import { environment } from 'src/environments/environment.prod';
import { SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-prihlaseni',
  templateUrl: './prihlaseni.page.html',
  styleUrls: ['./prihlaseni.page.scss'],
})
export class PrihlaseniPage implements OnInit {
  [x: string]: any;
  email: string;
  password: string;
  passwordToggleIcon = "eye";
  showPassword: boolean;
  usernameRegEx = new RegExp('^[a-zA-Z0-9_.-]{4,20}$');
  emailRegEx = new RegExp('^^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,4}$');
  passwordRegEx = new RegExp('^[a-zA-Z0-9?!.@#$%^&*_-]{8,20}$');

  constructor(private router: Router, private loadingController: LoadingController, sessionStorage: SessionStorageService, private alertController: AlertController) { }

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
    if (this.passwordToggleIcon == 'eye-off') {
      this.passwordToggleIcon = 'eye';
    }
    else {
      this.passwordToggleIcon = 'eye-off';
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
        await axios.post(environment.APIHOST + ':' + Number(environment.APIPORT) + '/users/login', body,    {
          //httpsAgent: new https.Agent({ ca: fs.readFileSync("cert.pem") })
        }).then(response0 => {
          this.sessionStorage.store('token', response0.data.token);
        }).catch(error => {
          console.error(error);
          if (error == "user not found with this email") {}
          else if (error == "user not found with this username") {}
          else if (error == "password is not valid") {}
        });
        await loading.dismiss();
      }
      catch (error) {
        console.error(error);
        if (error.message == "Network Error") {
          const alert = await this.alertController.create({
            header: 'UPOZORNĚNÍ!',
            message: 'Špatné připojení k internetu.',
            buttons: ['OK'],
          })
        }
      }
      try {
        await axios.get(environment.APIHOST + ':' + Number(environment.APIPORT) + '/users/{id}', { headers: { Authorization: `Bearer ` + this.sessionStorage.retrieve('token')}}).then(response => {
          this.sessionStorage.store('settings', response.data);
          this.router.navigateByUrl('/home');
        }).catch(error => {
          /*Tady bude kus kodu od Anet
          ///console.error(error);
          if (error.message == "email or username already exist") {
              const alert = await this.alertController.create({
              header: 'UPOZORNĚNÍ!',
              message: 'Vámi zadaný email nebo uživatelské jméno existuje.',
              buttons: ['OK'],
            })
          }
          
          */
        });
      }
      catch (error) {
        //Tady bude kus kodu od Anet
        /*console.error(error);
        if (error.message == "email already exist") {
              const alert = await this.alertController.create({
              header: 'UPOZORNĚNÍ!',
              message: 'Vámi zadaný email již existuje.',
              buttons: ['OK'],
            })
          }

          if (error.message == "username already exist") {
              const alert = await this.alertController.create({
              header: 'UPOZORNĚNÍ!',
              message: 'Vámi zadaný uživatelské jméno již existuje.',
              buttons: ['OK'],
            })
          }

        */
      }
      await loading.dismiss();
    }
    else if (!this.emailCheck()) {
      const alert = await this.alertController.create({
        header: 'UPOZORNĚNÍ!',
        message: 'Špatně zadaný email.',
        buttons: ['OK'],
      })
    }
    else if (!this.usernameCheck()) {
      const alert = await this.alertController.create({
        header: 'UPOZORNĚNÍ!',
        message: 'Špatné zadané uživatelské jméno.',
        buttons: ['OK'],
      })
    }
    else if (!this.passwordCheck()) {
      const alert = await this.alertController.create({
        header: 'UPOZORNĚNÍ!',
        message: 'Špatně zadané heslo.',
        buttons: ['OK'],
      })
    }
  }
}