import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavodyService } from 'src/app/services';
import { Navod, PopisNavodu } from 'src/app/types/navod';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  navod: Navod;
  popisy: Array<PopisNavodu>

  constructor(private router: Router, private navodyService: NavodyService, private activatedRoute: ActivatedRoute, ) {
    const nazev: string = this.activatedRoute.snapshot.paramMap.get('nazevNavodu');
    this.navod = this.navodyService.getNavodByName(nazev); 
    this.popisy = this.navod.popisy;
  }

  ngOnInit() {
  }

}