import { Component, OnInit } from '@angular/core';
import { Navod, PopisNavodu } from '../../types/navod';
import { Router } from '@angular/router';
import { NavodyService } from '../../services';


@Component({
  selector: 'app-navody',
  templateUrl: './navody.page.html',
  styleUrls: ['./navody.page.scss']
})
export class NavodyPage implements OnInit {

  items: Array<Navod>;

  constructor(private router: Router, private navodyService: NavodyService) { 
  }

  ngOnInit() {
    this.items = this.navodyService.getVsechnyNavody();
  }

  goVnitrek(item: Navod) {
    this.router.navigate([`navody/vnitrek/`, {nazevNavodu: item.nazev}]);
  }

  vyberObtiznost(event: Event) {
    if (item.obtiznost == 'lehky') {
      console.log("Funguje");
    }
    if (item.obtiznost == 'stredni') {
      console.log("ble")
    }
    if (item.obtiznost == 'tezky') {
      console.log("možná")
    }
  }

  premiove(event: Event) {
    console.log("ble");
  }

  vsechno(event: Event) {
    console.log("ble")
  }

  dokocene(event: Event) {
    console.log("ble")
  }
} 