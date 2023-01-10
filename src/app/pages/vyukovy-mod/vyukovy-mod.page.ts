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

  constructor(private router: Router, private vyukaService: VyukaService) {
   }

  ngOnInit() {
    this.items = this.vyukaService.getVsechnyVyrobky()
  }

  goDetail(item: Vyrobek) {
    this.router.navigate([`vyukovy-mod/detail`, {nazevVyrobku: item.nazev}]);
  }

  public search() {
    const searchBox = document.querySelector(".search-box");
    const searchBtn = document.querySelector(".search-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    const searchInput = document.querySelector("input");
    const searchData = document.querySelector(".search-data");
    document.getElementById("search-icon").onclick =()=>{
      searchBox.classList.add("active");
      searchBtn.classList.add("active");
      searchInput.classList.add("active");
      cancelBtn.classList.add("active");
      searchInput.focus();
      if(searchInput.value != "") {
        var values = searchInput.value;
        searchData.classList.remove("active");
        searchData.innerHTML = "You just typed " + "<span style='font-weight: 500;'>" + values + "</span>";
      }
      else{
        searchData.textContent = "";
      }
    }
    document.getElementById("cancel-icon").onclick =()=>{
      searchBox.classList.remove("active");
      searchBtn.classList.remove("active");
      searchInput.classList.remove("active");
      cancelBtn.classList.remove("active");
      searchData.classList.toggle("active");
      searchInput.value = "";
    }
  }
}  
