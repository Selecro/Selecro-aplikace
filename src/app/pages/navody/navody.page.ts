import { Component, OnInit } from '@angular/core';
import { Navod } from '../../types/navod';
import { Router } from '@angular/router';
import { NavodyService } from '../../services';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navody',
  templateUrl: './navody.page.html',
  styleUrls: ['./navody.page.scss']
})

export class NavodyPage implements OnInit {

  items: Array<Navod>;
  obtiznost: String;
  selectedElement: String;
  selectedItem: String;
  searchInput: any;
  selected: boolean = false;

  constructor(private router: Router, private navodyService: NavodyService, public translate: TranslateService ) {
    translate.addLangs(['CZ', 'EN']);
    translate.setDefaultLang('CZ');
  }

  ngOnInit() {
    this.items = this.navodyService.getVsechnyNavody();
    this.searchInput = document.querySelector("input");
    this.inputbox();
    localStorage.setItem("finished", "");
  }
  
  public switchLanguage(lang:string) {
    return this.translate.use(lang);
  }
  vyberObtiznost(e) {
    if (e.detail.value == "lehky" || e.detail.value == "stredni" || e.detail.value == "tezky") {
      this.obtiznost = e.detail.value;
    }
    else {
      this.obtiznost = null;
    }
    return this.obtiznost;
  }

  premiove(event: Event) {
    this.selected = true;
  }

  vsechno(event: Event) {
    this.selectedElement = null;
    this.selected = false;
  }

  dokocene(event: Event) {
  }

  inputbox() {
    const searchBox = document.querySelector(".search-box");
    const searchBtn = document.querySelector(".search-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    document.getElementById("search-icon").onclick = () => {
      searchBox.classList.add("active");
      searchBtn.classList.add("active");
      this.searchInput.classList.add("active");
      cancelBtn.classList.add("active");
      this.searchInput.focus();
    }
    document.getElementById("cancel-icon").onclick = () => {
      searchBox.classList.remove("active");
      searchBtn.classList.remove("active");
      this.searchInput.classList.remove("active");
      cancelBtn.classList.remove("active");
      this.searchInput.value = "";
    }
  }

  search() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.searchInput.value === "") {
        this.selectedItem = null;
      }
      else if (this.items[i].title.includes(this.searchInput.value)) {
        this.selectedItem = this.items[i].nazev;
      }
    }
  }

  timer() {
    localStorage.setItem("time", "");
  }
}