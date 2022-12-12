import { Component, OnInit } from '@angular/core';
import { Navod, Obtiznost, PopisNavodu } from '../../types/navod';
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
    this.items = this.navodyService.getVsechnyNavody()
  }

  goVnitrek(item: Navod) {
    this.router.navigate([`navody/vnitrek/`, {nazevNavodu: item.nazev}]);
  }

  vyberObtiznost(item: Navod) {
    if (item[0] == 'lehky' ) {
      this.navodyService;
      console.log("ble");
    }
    if (item.obtiznost == 'stredni') {
      console.log("ble")
    }
    if (item.obtiznost == 'tezky') {
      console.log("možná")
    }
    else{
      console.log(item.obtiznost)
    }
  }

  premiove (item: Navod) {
    console.log("ble");
  }

  vsechno (item: Navod) {
    console.log("ble")
  }

  dokocene (item: Navod) {
    console.log("ble")
  }

 /* getLehkyNavod(item: Navod) {
    return this.navodyService.getVsechnyNavody(item.obtiznost.lehky);
  }*/
} 