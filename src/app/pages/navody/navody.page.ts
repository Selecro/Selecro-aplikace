import { Component, OnInit } from '@angular/core';
import { Navod } from '../../types/navod';
import { Router } from '@angular/router';
import { NavodyService } from '../../services';

@Component({
  selector: 'app-navody',
  templateUrl: './navody.page.html',
  styleUrls: ['./navody.page.scss']
})

export class NavodyPage implements OnInit {

  items: Array<Navod>;
  obtiznost: String;
  selectedElement: String;

  constructor(private router: Router, private navodyService: NavodyService) { 
    //this.obtiznost = "lehky";
  }

  ngOnInit() {
    this.items = this.navodyService.getVsechnyNavody();
    //this.obtiznost = "lehky";
  }

  goVnitrek(item: Navod) {
    this.router.navigate([`navody/vnitrek/`, {nazevNavodu: item.nazev}]);
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
    console.log("ble");
  }

  vsechno(event: Event) {
    console.log("ble")
  }

  dokocene(event: Event) {
    console.log("ble")
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