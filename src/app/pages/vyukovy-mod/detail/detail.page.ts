import { Component, OnInit , ViewChild, ViewEncapsulation} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VyukaService } from 'src/app/services';
import { Postup, Vyrobek } from 'src/app/types';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailPage implements OnInit {
  @ViewChild('swiper') swiper: SwiperComponent;
  config: SwiperOptions = {
  };

  vyrobek: Vyrobek;
  kroky: Array<Postup>

  constructor(private vyukaService: VyukaService, private activatedRoute: ActivatedRoute) {
    const nazev: string = this.activatedRoute.snapshot.paramMap.get('nazevVyrobku');
    this.vyrobek = this.vyukaService.getNavodByName(nazev);
    this.kroky = this.vyrobek.kroky;
  }

  ngOnInit() {

  }


}
