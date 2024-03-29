import { Component, OnInit } from '@angular/core';
import { Navod } from 'src/app/types/navod';
import { NavodyService } from 'src/app/services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vnitrek',
  templateUrl: './vnitrek.page.html',
  styleUrls: ['./vnitrek.page.scss'],
})
export class VnitrekPage implements OnInit {
  navod: Navod;
  name: string;
  element0: NodeListOf<HTMLElement> | undefined;

  constructor(private router: Router, private navodyService: NavodyService, private route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.name = (this.router.url.split('/'))[3];
      this.navod = this.navodyService.getNavodyByName(this.name);
      this.element0 = document.getElementsByName("element0");
      try {
        if(localStorage.getItem("finished") != "null") {
          if(this.element0.item(Number(localStorage.getItem("finished"))).getAttribute("style")) {
            this.element0.item(Number(localStorage.getItem("finished"))).removeAttribute("style");
          }
          else {
            this.element0.item(Number(localStorage.getItem("finished"))).setAttribute("style", "background-color: #32CD32");
          }
        }
      }
      catch(e) {
      }
    });
  }

  ngOnInit() {
  }

  finished(nazevCasti: string) {
    if(this.element0.item(this.navod.popisy.findIndex(x => x.nazevCasti == nazevCasti)).getAttribute("style")) {
      localStorage.setItem("finished","true");
    }
    else {
      localStorage.setItem("finished","false");
    }
  }
}