import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PomuckyService } from 'src/app/services/pomucky.service';
import { Pomucka, PopisPomucek } from 'src/app/types';

@Component({
  selector: 'app-pomucky',
  templateUrl: './pomucky.page.html',
  styleUrls: ['./pomucky.page.scss'],
})
export class PomuckyPage implements OnInit {
  pomucka: Pomucka
  kroky: Array<PopisPomucek>;

  constructor(private pomuckyService: PomuckyService, private router: Router) {
   }

  ngOnInit() {
    const nazev = (this.router.url.split('/'))[2];
    console.log(nazev);
    this.pomucka = this.pomuckyService.getPomuckaByName(nazev);
    this.kroky = this.pomucka.kroky;
  }
}
