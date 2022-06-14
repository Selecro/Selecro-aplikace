import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VyukaService } from 'src/app/services';
import { Vyrobek } from 'src/app/types';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  item: Vyrobek;

  constructor(private vyukaService: VyukaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const nazev: string = this.activatedRoute.snapshot.paramMap.get('nazevVyrobku');
    this.item = this.vyukaService.getNavodByName(nazev);
  }


}
