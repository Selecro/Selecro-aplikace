import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PopisNavodu, Navod } from 'src/app/types/navod';
import { NavodyService } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';
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
    this.name = this.activatedRoute.snapshot.paramMap.get('nazevNavodu');
    this.navod = this.navodyService.getNavodByName(this.name);
  }

  goDetail(popis: PopisNavodu) {
    localStorage.setItem("popis", popis.nazevCasti);
    this.router.navigate([`detail`]);
  }
}