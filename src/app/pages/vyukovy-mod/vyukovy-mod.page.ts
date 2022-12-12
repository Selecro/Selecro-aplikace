import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VyukaService } from '../../services';
import { Vyrobek } from '../../types';

@Component({
  selector: 'app-vyukovy-mod',
  templateUrl: './vyukovy-mod.page.html',
  styleUrls: ['./vyukovy-mod.page.scss'],
})
export class VyukovyModPage implements OnInit {

  items: Array<Vyrobek>;

  constructor(private router: Router, private vyukaService: VyukaService) {
   }

  ngOnInit() {
    this.items = this.vyukaService.getVsechnyVyrobky()
  }

  goDetail(item: Vyrobek) {
    this.router.navigate([`vyukovy-mod/detail`, {nazevVyrobku: item.nazev}]);
  }
}  
