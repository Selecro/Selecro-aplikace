import { Component, OnInit } from '@angular/core';
import { Navod } from '../../types/navod';
import { Router } from '@angular/router';
import { NavodyService } from '../../services';

@Component({
  selector: 'app-navody',
  templateUrl: './navody.page.html',
  styleUrls: ['./navody.page.scss']
})

export class NavodyPage implements OnInit {

  items: Array<Navod>;
  obtiznost: String;
  selectedElement: String;

  constructor(private router: Router, private navodyService: NavodyService) {
  }

  ngOnInit() {
    this.items = this.navodyService.getVsechnyNavody();
  }

  goVnitrek(item: Navod) {
    this.router.navigate([`navody/vnitrek/`, {nazevNavodu: item.nazev}]);
  }

  vyberObtiznost(e) {
    if (e.detail.value == "lehky" || e.detail.value == "stredni" || e.detail.value == "tezky") {
      this.obtiznost = e.detail.value;
    }
    else {
      this.obtiznost = null;
    }
    return this.obtiznost;
  }

  premiove(event: Event) {
    console.log("ble");
  }

  vsechno(event: Event) {
    this.selectedElement = null;
  }

  dokocene(event: Event) {
    console.log("ble");
  }

}
