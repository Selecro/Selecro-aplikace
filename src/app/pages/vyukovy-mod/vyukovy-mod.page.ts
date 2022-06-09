import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {VyukaService} from '../../services';
import {Navod} from '../../types';

@Component({
  selector: 'app-vyukovy-mod',
  templateUrl: './vyukovy-mod.page.html',
  styleUrls: ['./vyukovy-mod.page.scss'],
})
export class VyukovyModPage implements OnInit {

  items: Array<Navod>;

  constructor(private router: Router, private vyukaService: VyukaService) {

   }

  ngOnInit() {
    this.items = this.vyukaService.getVsechnyNavody()
  }

  goDetail(item: Navod){
    this.router.navigate([`vyukovy-mod/detail`, {nazevNavodu: item.nazev}]);
  }

}
