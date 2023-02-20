import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavodyService } from 'src/app/services';
import { Navod } from 'src/app/types';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  navod: Navod;
  name: string;
  element0: NodeListOf<HTMLElement> | undefined;
  intervalId: any;
  timer: any = 0;
  index: number;
  index0: number;

  constructor(private router: Router, private navodyService: NavodyService) {
  }

  ngOnInit() {
    this.name = (this.router.url.split('/'))[3];
    this.navod = this.navodyService.getNavodyByName(this.name);
    this.index = this.navod.popisy.findIndex(x => x.nazevCasti === this.router.url.split('/')[5]);
    this.index0 = 0;
    this.element0 = document.getElementsByName("element0");
    if(localStorage.getItem("time") != "0") {
      this.timer = Number(localStorage.getItem("time"));
      this.time();
    }
  }

  get minutes() {
    return Math.floor(this.timer / 60) % 60;
  }

  get seconds() {
    return ("00" + this.timer % 60).slice(-2);
  }

  public time() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = 0;
    }
    else if (!this.intervalId) {
      this.intervalId = setInterval(() => this.timer++, 1000);
    }
  }

  public previousIndex() {
    if (this.index0 > 0) {
      this.element0?.item(--this.index0).removeAttribute("style");
    }
  }

  public nextIndex() {
    if (this.index0 < this.navod.popisy[this.index].popis.length) {
      this.element0?.item(this.index0++).setAttribute("style", "text-decoration: line-through; color: gray");
    }
    else {
      this.finished();
    }
  }

  public finished() {
    this.time();
    localStorage.setItem("time", this.timer);
    localStorage.setItem("finished", String(this.index));
  }
}