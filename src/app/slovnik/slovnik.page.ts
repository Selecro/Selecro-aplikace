import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slovnik',
  templateUrl: './slovnik.page.html',
  styleUrls: ['./slovnik.page.scss'],
})

export class SlovnikPage implements OnInit {
  slovnik : Array<Object> = [{nazev: "Řetízkové oko", cesta: "retizkove-oko"}, "Pevné oko", "Krátký sloupek", "Dlouhý sloupek", "Polodlouhý sloupek", "Rozháčkování", "Sháčkování", "Magický kroužek"];
  
  constructor(private router: Router) {

   }

  ngOnInit() {
  }
  
  buttonClick(cesta: string) {
    this.router.navigate(['/'+cesta])
    console.log("Klik");
  }
}
