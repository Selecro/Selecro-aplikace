import { Injectable } from '@angular/core';
import { Navod, Obtiznost, PopisNavodu } from '../types/navod';

 const poleNavodu = [
  { obtiznost: Obtiznost.lehky,
    nazev: "dinosaurus",
    titulek: "Dinosaurus",
    zkratky: "Mk, V, Ks, A, Po, Řo",
    pomucky: "Háček (velikosti 2mm), jehla, značkovač, duté vlákno, bezpečnostní očka",
    popisy: [
      { obrazek: true,
        nazevCasti: 'hlava',
        titulekCasti: 'Hlava',
        popis: 'Mk (6)<br> V<br> ks, V<br> 2ks, V<br> 3ks, V<br> 4ks, V <br>5ks, V <br>ks (6 řad)<br> 5ks, A<br> 4ks, A<br> 3ks, A<br> 2ks, A<br> ks, A<br> A<br> Po'
      },
      { obrazek: true,
        nazevCasti: 'nos',
        titulekCasti: 'Nos',
        popis: "Mk (6)<br> V<br> ks, V<br> 2ks, V<br> 3ks, V<br> ks (3 řady)<br> 3ks, A<br> Po"
      },
      { obrazek: true,
        nazevCasti: 'telo',
        titulekCasti: 'Tělo',
        popis: "Mk (6)<br V<br> ks, V<br> 2ks, V<br> 3ks, V<br> 4ks, V<br> 5ks, V<br> 6ks, V<br> ks (3 řady)<br> 6ks, A<br> 5ks, A<br> 4ks, A<br> ks (3 řady)<br> 3ks, A<br> ks (1 řada)<br> 2ks, A<br> ks (1 řada)<br> Po"
      },
      { obrazek: true,
        nazevCasti: 'predni-noha',
        titulekCasti: 'Přední noha (2x)',
        popis: "Mk (6)<br> V<br> ks (7 řad)<br> Po"
      },
      { obrazek: true,
        nazevCasti: 'zadni-noha',
        titulekCasti: 'Zadní noha (2x)',
        popis: "Mk (6)<br> V<br> ks, V<br> 2ks, V<br> ks (2 řady)<br> 2ks, A<br> 4A, 10ks<br> 2A, 10ks<br> ks (8 řad)<br> A<br> Po"
      },
      { obrazek: true,
        nazevCasti: 'ocas',
        titulekCasti: 'Ocas',
        popis: "Mk (6)<br> V<br> 11ks, V<br> 12ks, V<br> 13ks, V<br> 14ks, V<br> 15ks, V<br> 16ks, V<br> 17ks, V<br> 18ks, V<br> 19ks, V<br> 20ks, V<br> 21ks, V<br> 22ks, V<br> 23ks, V<br> Po<br>"
      },
      { obrazek: true,
        nazevCasti: 'osten',
        titulekCasti: 'Osten (6x)',
        popis: "Mk (6)<br> 2ks, V<br> 3ks, V<br> 4ks, V<br> 5ks, V<br> 6ks, V<br> Po"
      }
    ]
  },
  { obtiznost: Obtiznost.stredni,
    nazev: "harold",
    titulek: "Harold",
    zkratky: "Mk, Ks, Řo, Po, V, A",
    pomucky: "Háček (velikost 3,5 mm), jehla, příze (Jeans), značkovač, bezpečnostní očka (10 mm), výplň",
    popisy: [
      { obrazek: true,
        nazevCasti: 'hlava',
        titulekCasti: 'Hlava',
        popis: 'Mk (8) <br> V<br> ks, V<br> 2 ks, V<br> 3 ks, V<br> 4 ks, V<br> ks (6 řad)<br> 4 ks, A<br> 3 ks, A<br> 2 ks, A<br> ks, A<br> Po'
      },
      { obrazek: true,
        nazevCasti: 'chapadla',
        titulekCasti: 'Chapadla',
        popis: "6*(25řo, otočím směr háčkování a střídám 2V, W, Po do dalšího oka opět za vnější přízi) "
      },
      { obrazek: true,
        nazevCasti: 'vyplneni',
        titulekCasti: 'Vyplnění',
        popis: "Nezapomeňte v tomto bodě vyplnit."
      },
      { obrazek: true,
        nazevCasti: 'uzavreni',
        titulekCasti: 'Uzavření',
        popis: "A<br>Po na zakončení, necháme si delší kus příze na zapošití."
      },
      { obrazek: true,
        nazevCasti: 'doplnky',
        titulekCasti: 'Doplňky',
        popis: "Obočí a pusinku našijeme černou přízí."
      }
    ]
  },
  { obtiznost: Obtiznost.tezky,
    nazev: "vodni-zelva",
    titulek: "Vodní želva",
    zkratky: "Mk, Ks, Řo, Po, V, A",
    pomucky: "Háček (velikost 3,5 mm), jehla, příze (Jeans), značkovač, bezpečnostní očka (10 mm), výplň",
    popisy: [
      { obrazek: true,
        nazevCasti: 'hlava',
        titulekCasti: "Hlava",
        popis: "Mk (8) <br> V<br> ks, V<br> 2 ks, V<br> 3 ks, V<br> 4 ks, V<br> ks (4 řad)<br> 4 ks, A<br> 3 ks, A<br> 2 ks, A<br> ks, A<br> Po"
      },
      { obrazek: true,
        nazevCasti: 'horni-cast-krunyre',
        titulekCasti: "Horní část krunýře",
        popis: "Mk (8) <br> V<br> ks, V<br> 2 ks, V<br> 3 ks, V<br> 4 ks, V<br> 5 ks, V<br> 6ks, V<br> ks (3 řady)<br> Po"
      },
      { obrazek: true,
        nazevCasti: 'spodni-cast-krunyre',
        titulekCasti: "Spodní část krunýře",
        popis: "Mk (8) <br> V<br> ks, V<br> 2 ks, V<br> 3 ks, V<br> 4 ks, V<br> 5 ks, V<br> 6ks, V<br> Po"
      },
      { obrazek: true,
        nazevCasti: 'zadni-ploutev',
        titulekCasti: "Zadní ploutev (2x)",
        popis: "Mk (8) <br> V<br> ks, V<br> 2 ks, V<br> 3 ks, V<br> 4 ks, V<br> Po<br> Po dokončení kolečko ohneme napůl a sešijeme k sobě."
      },
      { obrazek: true,
        nazevCasti: 'predni-ploutev',
        titulekCasti: "Přední ploutev (2x)",
        popis: "Mk (8) <br> V<br> ks, V<br> 2 ks, V<br> 3 ks, V<br> 4 ks, V<br> 5 ks, V<br> 6ks, V<br> Po<br> Po dokončení kolečko ohneme napůl a sešijeme k sobě."
      },
      { obrazek: false,
        nazevCasti: 'ocasek',
        titulekCasti: "Ocásek",
        popis: "Mk (4)<br> ks (2 řady)<br> Po"
      },
    ],
},];

@Injectable({
  providedIn: 'root'
})
export class NavodyService {

  mapaNavodu: Map<string,Navod>;
  mapaPopisu: Map<string, PopisNavodu>;
  polePopisu: Array<PopisNavodu>;
  
  constructor() {
    this.initMap();
  }

  private initMap(){
    this.mapaNavodu = new Map();
    poleNavodu.forEach(navod=>{

      this.mapaNavodu.set(navod.nazev, navod);
    });
  }

  public getNavodByName(name: string): Navod {
    return this.mapaNavodu.get(name);
  }

  public getPopisyByName(name: string): Array<PopisNavodu> {
    return this.getNavodByName(name).popisy;
  }

  public getVsechnyNavody(): Array<Navod> {
    return poleNavodu;
  }

  public getVsechnyPopisy(): Array<PopisNavodu> {
    return this.polePopisu;
  }
}
