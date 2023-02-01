import { Component, OnInit } from '@angular/core';
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
  popisy: Array<PopisNavodu>;
  intervalId: any;
  timer: any = 0;

  constructor(private router: Router, private navodyService: NavodyService) {
    this.popis = this.router.getCurrentNavigation().extras.state.popis;
    this.popisy = this.navodyService.getVsechnyPopisy();
  }

  ngOnInit() {
    this.popis = this.router.getCurrentNavigation().extras.state.popis;
    this.popisy = this.navodyService.getVsechnyPopisy();
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
}