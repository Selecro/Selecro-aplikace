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
  popis: Array<PopisNavodu>;
  index: number;
  title: string;

  constructor(private router: Router, private navodyService: NavodyService) {
    this.title = localStorage.getItem("popis");
    this.popis = this.navodyService.getPopisyByName(this.title);
    console.log(this.title);
    this.index = this.popis.findIndex(x => x.nazevCasti === this.title);
  }

  ngOnInit() {
  }
  
  public nextIndex() {
    if (this.index + 1 >= this.popis.length) {
      this.index = 0;
    }
    else {
      this.index++;
    }
  }

  public previousIndex() {
    if (this.index - 1 < 0) {
      this.index = this.popis.length - 1;
    }
    else {
      this.index--;
    }
  }
}