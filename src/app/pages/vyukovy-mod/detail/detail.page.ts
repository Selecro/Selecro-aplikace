import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VyukaService } from 'src/app/services';
import { Navod } from 'src/app/types';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  item: Navod;

  constructor(private vyukaService: VyukaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const nazev: string = this.activatedRoute.snapshot.paramMap.get('nazevNavodu');
    this.item = this.vyukaService.getNavodByName(nazev);
  }


}
