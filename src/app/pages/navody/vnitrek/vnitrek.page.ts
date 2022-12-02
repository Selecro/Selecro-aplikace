import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PopisNavodu, Navod } from 'src/app/types/navod';
import { NavodyService } from 'src/app/services';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
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

  constructor(private router: Router, private navodyService: NavodyService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('HERE');
    const name: string = this.activatedRoute.snapshot.paramMap.get('nazevNavodu');
    this.navod = this.navodyService.getNavodByName(name);
    this.popisy = this.navodyService.getPopisyByName(name);
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
