import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  data: any;

  constructor(private sessionStorage: SessionStorageService) { }

  async ngOnInit() {
    this.data = this.sessionStorage.retrieve('settings');
  }

  public logout() {
    this.sessionStorage.clear();
  }

}
