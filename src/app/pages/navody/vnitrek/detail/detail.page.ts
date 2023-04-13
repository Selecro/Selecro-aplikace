import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
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
  element: NodeListOf<HTMLElement> | undefined;
  intervalId: any;
  timer: any = 0;
  index: number;
  index0: number;
  executed: number = 0;

  constructor(private router: Router, private navodyService: NavodyService, public translate: TranslateService ) {
  }

  ngOnInit() {
    this.name = (this.router.url.split('/'))[3];
    this.navod = this.navodyService.getNavodyByName(this.name);
    this.index = this.navod.popisy.findIndex(x => x.nazevCasti === this.router.url.split('/')[5]);
    this.element = document.getElementsByName("element");
    this.index0 = 0;
    if (localStorage.getItem("time") != "null") {
      this.timer = Number(localStorage.getItem("time"));
    }
    this.time();
    localStorage.setItem("time", "null");
  }

  public crossLine() {
    if (localStorage.getItem("finished") == "true") {
      this.element.forEach(x => x.setAttribute("style", "text-decoration: line-through; color: gray"));
      this.index0 = this.element.length;
    }
    else if (localStorage.getItem("finished") == "false") {
      this.element.forEach(x => x.removeAttribute("style"));
      this.index0 = 0;
    }
  }


  get minutes() {
    return Math.floor(this.timer / 60) % 60;
  }

  get seconds() {
    if (this.executed <= 2) {
      this.crossLine();
      this.executed++;
    }
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
      this.element?.item(--this.index0).removeAttribute("style");
    }
  }

  public nextIndex() {
    if (this.index0 + 1 < this.navod.popisy[this.index].popis.length) {
      this.element?.item(this.index0++).setAttribute("style", "text-decoration: line-through; color: gray");
    }
    else {
      this.finished();
      this.router.navigate(["/navody/vnitrek/" + this.navod.nazev]);
    }
  }

  public finished() {
    this.element.forEach(x => x.removeAttribute("style"));
    this.time();
    localStorage.setItem("time", this.timer);
    localStorage.setItem("finished", String(this.index));
  }

  public back() {
    this.element.forEach(x => x.removeAttribute("style"));
    this.time();
    localStorage.setItem("time", this.timer);
    localStorage.setItem("finished", "null");
  }
}