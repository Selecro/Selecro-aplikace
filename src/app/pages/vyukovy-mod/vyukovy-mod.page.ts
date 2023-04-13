import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VyukaService } from '../../services';
import { Vyrobek } from '../../types';

@Component({
  selector: 'app-vyukovy-mod',
  templateUrl: './vyukovy-mod.page.html',
  styleUrls: ['./vyukovy-mod.page.scss'],
})
export class VyukovyModPage implements OnInit {

  items: Array<Vyrobek>;
  searchInput: any;
  selectedItem: String;

  constructor(private router: Router, private vyukaService: VyukaService ) {
  }

  ngOnInit() {
    this.items = this.vyukaService.getVsechnyVyrobky();
    this.searchInput = document.querySelector("input");
    this.inputbox();
  }

  goDetail(item: Vyrobek) {
    this.router.navigate([`vyukovy-mod/detail`, { nazevVyrobku: item.nazev }]);
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
}