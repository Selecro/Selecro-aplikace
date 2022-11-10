import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PopisNavodu, Navod } from 'src/app/types/navod';
import { NavodyService } from 'src/app/services';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vnitrek',
  templateUrl: './vnitrek.page.html',
  styleUrls: ['./vnitrek.page.scss'],
  encapsulation: ViewEncapsulation.None, //je to na něco?
})
export class VnitrekPage implements OnInit {

  navod: Navod;
  popisy: Array<PopisNavodu>

  constructor(private navodyService: NavodyService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {
    const nazev: string = this.activatedRoute.snapshot.paramMap.get('nazevNavodu');
    this.navod = this.navodyService.getNavodByName(nazev); 
    this.popisy = this.navod.popisy;
  }

  ngOnInit() {
  }

}
