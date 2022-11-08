import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PomuckyService } from 'src/app/services/pomucky.service';
import { Pomucka } from 'src/app/types';

@Component({
  selector: 'app-pomucky',
  templateUrl: './pomucky.page.html',
  styleUrls: ['./pomucky.page.scss'],
})
export class PomuckyPage implements OnInit {
  pomucka: Pomucka

  constructor(private pomuckyService: PomuckyService, private router: Router) { }

  ngOnInit() {
    const nazev = (this.router.url.split('/'))[2];
   /* console.log(nazev);
    this.pomucka = this.pomuckyService.getPomuckaByName(nazev);
  */}

}
