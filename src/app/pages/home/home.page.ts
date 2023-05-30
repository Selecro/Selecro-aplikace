import { Component } from '@angular/core';
import { Router, RouterEvent, RouterLink } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private router: Router, private sessionStorage: SessionStorageService) { }

  public login() {
    if (this.sessionStorage.retrieve('token')) {
      this.router.navigateByUrl("/settings");
    }
    else if (!this.sessionStorage.retrieve('token')) {
      this.router.navigateByUrl("/prihlaseni");
    }
  }
}