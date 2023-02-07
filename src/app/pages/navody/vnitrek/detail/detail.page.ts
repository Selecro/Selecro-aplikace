import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavodyService } from 'src/app/services';
import { PopisNavodu } from 'src/app/types';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  popis: PopisNavodu;
  popisy: Array<string>;
  intervalId: any;
  timer: any = 0;
  index: number;
  item: string;
  element: NodeListOf<HTMLElement> | undefined;

  constructor(private router: Router, private navodyService: NavodyService) {
    this.popis = this.router.getCurrentNavigation().extras.state.popis;
    this.popisy = this.popis.popis;
    this.index = 0;
    if (localStorage.getItem("time") == null) {
      this.timer = localStorage.getItem("time");
    }
    else {
      this.timer = 0;
    }
    if (localStorage.getItem("item") == null) {
      this.item = localStorage.getItem("item");
    }
  }

  ngOnInit() {
    this.popis = this.router.getCurrentNavigation().extras.state.popis;
    this.popisy = this.popis.popis;
    this.element = document.getElementsByName("element");
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

  public finished() {
    localStorage.setItem("time", this.timer);
    this.router.navigate([`navody/vnitrek/`, { nazevNavodu: localStorage.getItem("nazev") }]);
  }

  public previousIndex() {
    if (this.index - 1 >= 0) {
      if (this.index >= this.popisy.length) {
        this.element?.item(this.index - 1).removeAttribute("style");
        this.index--;
      }
      else if ((this.element?.item(this.index - 1).getAttribute("style") != null)) {
        this.element?.item(this.index - 1).removeAttribute("style");
        this.index--;
      }
    }
  }

  public nextIndex() {
    if (this.index + 1 == this.popisy.length) {
      this.finished();
    }
    else {
      this.element?.item(this.index).setAttribute("style", "text-decoration: line-through; color: gray");
      this.index++;
    }
  }
}