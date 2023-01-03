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
    //this.obtiznost = "lehky";
  }

  ngOnInit() {
    this.items = this.navodyService.getVsechnyNavody();
    //this.obtiznost = "lehky";
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
    console.log("ble")
  }

  dokocene(event: Event) {
    console.log("ble")
  }

 /* getLehkyNavod(item: Navod) {
    return this.navodyService.getVsechnyNavody(item.obtiznost.lehky);
  }*/
} 