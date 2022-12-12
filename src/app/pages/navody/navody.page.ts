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

  constructor(private router: Router, private navodyService: NavodyService) { 
  }

  ngOnInit() {
    this.items = this.navodyService.getVsechnyNavody();
  }

  goVnitrek(item: Navod) {
    this.router.navigate([`navody/vnitrek/`, {nazevNavodu: item.nazev}]);
  }

  vyberObtiznost(event: Event) {
    if (this.items[0].obtiznost.toString() == "lehky") {
      console.log("Funguje")
    }
    if (this.items[0].obtiznost.toString() == "stredni") {
      console.log("ble")
    }
    if (this.items[0].obtiznost.toString() == "tezky") {
      console.log(this.items)
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

 /* getLehkyNavod(item: Navod) {
    return this.navodyService.getVsechnyNavody(item.obtiznost.lehky);
  }*/
} 