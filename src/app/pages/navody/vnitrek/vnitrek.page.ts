import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PopisNavodu, Navod } from 'src/app/types/navod';
import { NavodyService } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vnitrek',
  templateUrl: './vnitrek.page.html',
  styleUrls: ['./vnitrek.page.scss'],
  encapsulation: ViewEncapsulation.None, //je to na něco?
})
export class VnitrekPage implements OnInit {
  navod: Navod;
  popisy: Array<PopisNavodu>;
  popis: Navod[];

  constructor(private router: Router, private navodyService: NavodyService, private activatedRoute: ActivatedRoute) {
    const nazev: string = this.activatedRoute.snapshot.paramMap.get('nazevNavodu');
    this.navod = this.navodyService.getNavodByName(nazev); 
    this.popisy = this.navod.popisy; 
  }

  ngOnInit() {
    this.popis = this.navodyService.getVsechnyNavody();
  }

  goDetail(popis: PopisNavodu) {
    this.router.navigate([`vnitrek/detail`, {nazevPopisu: popis.titulekCasti}]);
  }
}
