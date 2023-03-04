import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import axios from 'axios';

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
  emailRegEx = new RegExp('[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}');
  passwordRegEx = new RegExp('^[a-zA-Z0-9?!.,_-]{8,20}$');

  constructor(private router: Router, private loadingController: LoadingController) { }

  ngOnInit() {
    console.log(process.env.APIHOST);
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
    if ((this.emailCheck() == true) && (this.passwordCheck() == true)) {
      const body = {
        email: this.email,
        passwordHash: this.password,
      };
      const loading = await this.loadingController.create({
        message: 'Please wait...',
      });
      try {
        await loading.present();
        axios.post('http://' + process.env.APIHOST + ':' + process.env.APIPORT + '/users/login', body).then(response => {
          this.router.navigateByUrl('/home');
        }).catch(error => {
          console.error(error);
        });
        await loading.dismiss();
      }
      catch(error) {
        console.error(error);
      }
      await loading.dismiss();
    }
  }
}