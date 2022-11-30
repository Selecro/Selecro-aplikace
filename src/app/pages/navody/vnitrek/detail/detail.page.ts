import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavodyService } from 'src/app/services';
import { Navod, PopisNavodu } from 'src/app/types/navod';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  popis: PopisNavodu;

  constructor(private router: Router, private navodyService: NavodyService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.popis = this.router.getCurrentNavigation().extras.queryParams as PopisNavodu; //podívat se :-)
    console.log("here");
    console.log(this.popis);
  }

  skrtnuti(){
    ;
  }

  odpreskrtnuti(){
    ;
  }

  hotovo(){
    ;
  }
}