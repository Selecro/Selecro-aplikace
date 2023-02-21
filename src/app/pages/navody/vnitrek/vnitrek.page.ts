import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PopisNavodu, Navod } from 'src/app/types/navod';
import { NavodyService } from 'src/app/services';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vnitrek',
  templateUrl: './vnitrek.page.html',
  styleUrls: ['./vnitrek.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VnitrekPage implements OnInit {
  navod: Navod;
  name: string;

  constructor(private router: Router, private navodyService: NavodyService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const name: string = this.activatedRoute.snapshot.paramMap.get('nazevNavodu');
    this.navod = this.navodyService.getNavodByName(name);
  }

  goDetail(popis: PopisNavodu) {
    const navigationExtras: NavigationExtras = {
      state: {
        popis: popis
      }
    }
    this.router.navigate([`detail`], navigationExtras);
  }
}