import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { VyukaService } from 'src/app/services';
import { Postup, Vyrobek } from 'src/app/types';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})

export class DetailPage implements OnInit {
  vyrobek: any;
  Postup: Array<Postup>;
  index: number;
  nazev: string;

  constructor(private vyukaService: VyukaService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.nazev = this.activatedRoute.snapshot.paramMap.get('nazevVyrobku');
    this.vyrobek = this.vyukaService.getVyrobekByName(this.nazev);
    this.Postup = this.vyukaService.getKroky(this.nazev);
    this.index = 0;
    console.log(this.vyrobek);
  }

  ngOnInit() {
    this.vyrobek = this.vyukaService.getVyrobekByName(this.nazev);
    this.Postup = this.vyukaService.getKroky(this.nazev);
    console.log(this.vyrobek);
  }

  ngDoCheck() {
    this.vyrobek = this.vyukaService.getVyrobekByName(this.nazev);
    this.Postup = this.vyukaService.getKroky(this.nazev);
  }

  getEmbedVideo(embed: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${embed}?showinfo=0&loop=1&modestbranding=1`);
  }

  public goToNextSlide() {
    if (this.index + 1 >= this.Postup.length) {
      this.index = 0;
    }
    else {
      this.index++;
    }
  }

  public goToPreviousSlide() {
    if (this.index - 1 < 0) {
      this.index = this.Postup.length - 1;
    }
    else {
      this.index--;
    }
  }
}