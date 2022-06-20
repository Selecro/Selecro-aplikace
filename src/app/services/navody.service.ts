import { Injectable } from '@angular/core';
import { Navod } from '../types';

 const poleNavodu = [
 {nazev: "Dinosaurus",
  zkratky: "Mk, V, Ks, A, Po, Řo",
  pomucky: "Háček velikosti 2mm, jehla, značkovač, duté vlákno, bezpečnostní očka",
  popisy: [
    {
      obrazek: true,
      nazevCasti: 'Hlava',
      popis: 'Mk (6)<br> V<br> ks, V<br> 2ks, V<br> 3ks, V<br> 4ks, V <br>5ks, V <br>ks (6 řad)<br> 5ks, A<br> 4ks, A<br> 3ks, A<br> 2ks, A<br> ks, A<br> A<br> Po'
    },
    {
      obrazek: true,
      nazevCasti: 'Nos',
      popis: "Mk (6)<br> V<br> ks, V<br> 2ks, V<br> 3ks, V<br> ks (3 řady)<br> 3ks, A<br> Po"
    },
    {
      obrazek: true,
      nazevCasti: 'Tělo',
      popis: "Mk (6)<br V<br> ks, V<br> 2ks, V<br> 3ks, V<br> 4ks, V<br> 5ks, V<br> 6ks, V<br> ks (3 řady)<br> 6ks, A<br> 5ks, A<br> 4ks, A<br> ks (3 řady)<br> 3ks, A<br> ks (1 řada)<br> 2ks, A<br> ks (1 řada)<br> Po"
    },
    {
      obrazek: true,
      nazevCasti: 'Přední noha (2x)',
      popis: "Mk (6)<br> V<br> ks (7 řad)<br> Po"
    },
    {
      obrazek: true,
      nazevCasti: 'Zadní noha (2x)',
      popis: "Mk (6)<br> V<br> ks, V<br> 2ks, V<br> ks (2 řady)<br> 2ks, A<br> 4A, 10ks<br> 2A, 10ks<br> ks (8 řad)<br> A<br> Po"
    },
    {
      obrazek: true,
      nazevCasti: 'Ocas',
      popis: "Mk (6)<br> V<br> 11ks, V<br> 12ks, V<br> 13ks, V<br> 14ks, V<br> 15ks, V<br> 16ks, V<br> 17ks, V<br> 18ks, V<br> 19ks, V<br> 20ks, V<br> 21ks, V<br> 22ks, V<br> 23ks, V<br> Po<br>"
    },

    {
      obrazek: true,
      nazevCasti: 'Osten (6x)',
      popis: "Mk (6)<br> 2ks, V<br> 3ks, V<br> 4ks, V<br> 5ks, V<br> 6ks, V<br> Po"
    }
]},
  { nazev: "Chobotnice Harold",
    zkratky: "Mk, Ks, Řo, Po, V, A",
    pomucky: "Háček (velikost 3,5 mm, jehla, příze (Jeans), značkovač, bezpečnostní očka (10 mm), výplň",
    popisy: [{
      obrazek: true,
      nazevCasti: 'Tělo',
      popis: 'Mk (8) <br> V<br> ks, V<br> 2 ks, V<br> 3 ks, V<br> 4 ks, V<br> ks (6 řad)<br> 4 ks, A<br> 3 ks, A<br> 2 ks, A<br> ks, A<br> Po'
    },
    {
      obrazek: true,
      nazevCasti: 'Tělo',
      popis: "6*(25řo, otočím směr háčkování a střídám 2V, W, Po do dalšího oka opět za vnější přízi) "
    },
    {
      obrazek: true,
      nazevCasti: 'Tělo',
      popis: "Nezapomeňte v tomto bodě vyplnit."
    },
    {
      obrazek: true,
      nazevCasti: 'Tělo',
      popis: "A<br>Po na zakončení, necháme si delší kus příze na zapošití."
    },
    {
      obrazek: true,
      nazevCasti: 'Tělo',
      popis: "<h2>Doplňky:</h2> Obočí a pusinku našijeme černou přízí."
    },
    {
      obrazek: true,
      nazevCasti: 'Tělo',
      popis: ""
    }
],

  }];


@Injectable({
  providedIn: 'root'
})
export class NavodyService {

  mapaNavodu: Map<string,Navod>;

  constructor() {
    this.initMap();
  }

  public getNavodByName(name: string): Navod {
    return this.mapaNavodu.get(name);
  }

  private initMap(){
    this.mapaNavodu = new Map();
    poleNavodu.forEach(navod=>{
      this.mapaNavodu.set(navod.nazev, navod);
    });
  }

  public getVsechnyNavody(): Array<Navod> {
    return poleNavodu;
  }


}
