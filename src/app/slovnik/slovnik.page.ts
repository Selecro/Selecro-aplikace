import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkDelegate } from '@ionic/angular';

@Component({
  selector: 'app-slovnik',
  templateUrl: './slovnik.page.html',
  styleUrls: ['./slovnik.page.scss'],
})

export class SlovnikPage implements OnInit {
  slovnik : Array<String> = ["Řetízkové oko", "Pevné oko", "Krátký sloupek", "Dlouhý sloupek", "Polodlouhý sloupek", "Rozháčkování", "Sháčkování", "Magický kroužek"];
  odkaz : Array<String> = ["retizkove-oko", "pevne-oko", "kratky-sloupek", "dlouhy.sloupek", "polodlouhy-sloupek", "rozhackovani", "shackovani", "magicky-krouzek"];

  constructor() { }

  ngOnInit() {
  }
  
  buttonClick() {
  
    console.log("Klik");
  }
}
