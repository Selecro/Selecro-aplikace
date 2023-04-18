import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Navod, Obtiznost, PopisNavodu } from '../types';

const poleNavoduCZ: Array<Navod> = [
  {
    obtiznost: Obtiznost.lehky,
    nazev: "dinosaurus",
    title: "Dinosaurus",
    zkratky: "Mk, V, Ks, A, Po, Řo",
    pomucky: "Háček (velikosti 2mm), jehla, značkovač, duté vlákno, bezpečnostní očka",
    premiove: false,
    popisy: [
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, A, Po",
        nazevCasti: "hlava-dinosaura",
        titulekCasti: "Hlava",
        popis: ["Mk (6)", "V", "ks, V", "2ks, V", "3ks, V", "4ks, V", "5ks, V", "ks (6 řad)", "5ks, A", "4ks, A", "3ks, A", "2ks, A", "ks, A", "A", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, A, Po",
        nazevCasti: "nos-dinosaura",
        titulekCasti: "Nos",
        popis: ["Mk (6)", "V", "ks, V", "2ks, V", "3ks, V", "ks (3 řady)", "3ks, A", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, A, Po",
        nazevCasti: "telo-dinosaura",
        titulekCasti: "Tělo",
        popis: ["Mk (6)", "V", "ks, V", "2ks, V", "3ks, V", "4ks, V", "5ks, V", "6ks, V", "ks (3 řady)", "6ks, A", "5ks, A", "4ks, A", "ks (3 řady)", "3ks, A", "ks (1 řada)", "2ks, A", "ks (1 řada)", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, Po",
        nazevCasti: "predni-noha-dinosaura",
        titulekCasti: "Přední noha (2x)",
        popis: ["Mk (6)", "V", "ks (7 řad)", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, A, Po",
        nazevCasti: "zadni-noha-dinosaura",
        titulekCasti: "Zadní noha (2x)",
        popis: ["Mk (6)", "V", "ks, V", "2ks, V", "ks (2 řady)", "2ks, A", "4A, 10ks", "2A, 10ks", "ks (8 řad)", "A", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, Po",
        nazevCasti: "ocas-dinosaura",
        titulekCasti: "Ocas",
        popis: ["Mk (6)", "V", "11ks, V", "12ks, V", "13ks, V", "14ks, V", "15ks, V", "16ks, V", "17ks, V", "18ks, V", "19ks, V", "20ks, V", "21ks, V", "22ks, V", "23ks, V", "Po", ""]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, Po",
        nazevCasti: "osten-dinosaura",
        titulekCasti: "Osten (6x)",
        popis: ["Mk (6)", "2ks, V", "3ks, V", "4ks, V", "5ks, V", "6ks, V", "Po"]
      }
    ]
  },
  {
    obtiznost: Obtiznost.stredni,
    nazev: "harold",
    title: "Harold",
    zkratky: "Mk, Ks, Řo, Po, V, A",
    pomucky: "Háček (velikost 3,5 mm), jehla, příze (Jeans), značkovač, bezpečnostní očka (10 mm), výplň",
    premiove: false,
    popisy: [
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, A, Po",
        nazevCasti: "hlava-harold",
        titulekCasti: "Hlava",
        popis: ["Mk (8)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "ks (6 řad)", "4 ks, A", "3 ks, A", "2 ks, A", "ks, A", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Řo, V, Po",
        nazevCasti: "chapadla-harold",
        titulekCasti: "Chapadla",
        popis: ["6*(25řo, otočím směr háčkování a střídám 2V, W, Po do dalšího oka opět za vnější přízi) "]
      },
      {
        obrazek: true,
        zkratkyCasti: null,
        nazevCasti: "vyplneni-harold",
        titulekCasti: "Vyplnění",
        popis: ["Nezapomeňte v tomto bodě vyplnit."]
      },
      {
        obrazek: true,
        zkratkyCasti: "A, Po",
        nazevCasti: "uzavreni-harold",
        titulekCasti: "Uzavření",
        popis: ["A", "Po na zakončení, necháme si delší kus příze na zapošití."]
      },
      {
        obrazek: true,
        zkratkyCasti: null,
        nazevCasti: "doplnky-harold",
        titulekCasti: "Doplňky",
        popis: ["Obočí a pusinku našijeme černou přízí."]
      }
    ]
  },
  {
    obtiznost: Obtiznost.tezky,
    nazev: "vodni-zelva",
    title: "Vodní želva",
    zkratky: "Mk, Ks, Řo, Po, V, A",
    pomucky: "Háček (velikost 3,5 mm), jehla, příze (Jeans), značkovač, bezpečnostní očka (10 mm), výplň",
    premiove: true,
    popisy: [
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, A, Po",
        nazevCasti: "hlava-zelva",
        titulekCasti: "Hlava",
        popis: ["Mk (8)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "ks (4 řad)", "4 ks, A", "3 ks, A", "2 ks, A", "ks, A", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, A, Po",
        nazevCasti: "horni-cast-krunyre-zelva",
        titulekCasti: "Horní část krunýře",
        popis: ["Mk (8)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5 ks, V", "6ks, V", "ks (3 řady)", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, Po",
        nazevCasti: "spodni-cast-krunyre-zelva",
        titulekCasti: "Spodní část krunýře",
        popis: ["Mk (8)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5 ks, V", "6ks, V", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, Po",
        nazevCasti: "zadni-ploutev-zelva",
        titulekCasti: "Zadní ploutev (2x)",
        popis: ["Mk (8)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "Po", "Po dokončení kolečko ohneme napůl a sešijeme k sobě."]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, Po",
        nazevCasti: "predni-ploutev-zelva",
        titulekCasti: "Přední ploutev (2x)",
        popis: ["Mk (8)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5 ks, V", "6ks, V", "Po", "Po dokončení kolečko ohneme napůl a sešijeme k sobě."]
      },
      {
        obrazek: false,
        zkratkyCasti: "Mk, Ks, Po",
        nazevCasti: "ocasek-zelva",
        titulekCasti: "Ocásek",
        popis: ["Mk (4)", "ks (2 řady)", "Po"]
      },
    ],
  },
];

const poleNavoduEN: Array<Navod> = [
  {
    obtiznost: Obtiznost.lehky,
    nazev: "dinosaurus",
    title: "Dino",
    zkratky: "Mr, Inc, Sc, Dec, Sl St, Ch",
    pomucky: "Hook (size 2mm), Needle, Stitch marker, Hollow fiber, Safety eyes",
    premiove: false,
    popisy: [
      {
        obrazek: true,
        zkratkyCasti: "Mr, Inc, Sc, Dec, Sl St",
        nazevCasti: "hlava-dinosaura",
        titulekCasti: "Head",
        popis: ["Mr (6)", "Inc", "Sc, Inc", "2Sc, Inc", "3SC, Inc", "4Sc, Inc", "5Sc, Inc", "Sc (6 rows)", "5Sc, Dec", "4Sc, Dec", "3Sc, Dec", "2Sc, Dec", "Sc, Dec", "Dec", "SlSt"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mr, Inc, Sc, Dec, Sl St",
        nazevCasti: "nos-dinosaura",
        titulekCasti: "Nose",
        popis: ["Mr (6)", "Inc", "Sc, Inc", "2Sc, Inc", "3Sc, Inc", "Sc (3 rows)", "3Sc, Dec", "SlSt"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mr, Inc, Sc, Dec, Sl St",
        nazevCasti: "telo-dinosaura",
        titulekCasti: "Body",
        popis: ["Mr (6)", "Inc", "Sc, Inc", "2Sc, Inc", "3SC, Inc", "4Sc, Inc", "5Sc, Inc", "6Sc, Inc", "Sc (3 rows)", "6Sc, Dec", "5Sc, Dec", "4Sc, Dec", "Sc (3 rows)", "3Sc, Dec", "Sc (1 row)", "2Sc, A", "Sc (1 rows)", "SlSt"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mr, Inc, Sc, Sl St",
        nazevCasti: "predni-noha-dinosaura",
        titulekCasti: "Front leg (2x)",
        popis: ["Mr (6)", "Inc", "Sc (7 rows)", "SlSt"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mr, Inc, Sc, Dec, Sl St",
        nazevCasti: "zadni-noha-dinosaura",
        titulekCasti: "Back leg (2x)",
        popis: ["Mr (6)", "Inc", "Sc, Inc", "2Sc, Inc", "Sc (2 rows)", "2Sc, Dec", "4Dec, 10Sc", "2Dec, 10Sc", "Sc (8 rows)", "Dec", "SlSt"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mr, Inc, Sc, Sl St",
        nazevCasti: "ocas-dinosaura",
        titulekCasti: "Tail",
        popis: ["Mr (6)", "Inc", "11Sc, Inc", "12Sc, Inc", "13Sc, Inc", "14Sc, Inc", "15Sc, Inc", "16Sc, Inc", "17Sc, Inc", "18Sc, Inc", "19Sc, Inc", "20Sc, Inc", "21Sc, Inc", "22Sc, Inc", "23Sc, Inc", "SlSt"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mr, Inc, Sc, Sl St",
        nazevCasti: "osten-dinosaura",
        titulekCasti: "Spike (6x)",
        popis: ["Mr (6)", "2Sc, Inc", "3Sc, Inc", "4Sc, Inc", "5Sc, Inc", "6Sc, Inc", "SlSt"]
      }
    ]
  },
  {
    obtiznost: Obtiznost.stredni,
    nazev: "harold",
    title: "Harold",
    zkratky: "Mr, Sc, Ch, Sl St, Inc, Dec",
    pomucky: "Hook (size 3,5 mm), Needle, Yarn (Jeans), Stitch marker, Safety eyes (10 mm), Filling",
    premiove: false,
    popisy: [
      {
        obrazek: true,
        zkratkyCasti: "Mr, Inc, Sc, Dec, Sl St",
        nazevCasti: "hlava-harold",
        titulekCasti: "Head",
        popis: ["Mr (8)", "Inc", "Sc, Inc", "2Sc, Inc", "3Sc, Inc", "4Sc, Inc", "Sc (6 rows)", "4Sc, Dec", "3Sc, Dec", "2Sc, Dec", "Sc, Dec", "SlSt"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Ch, Inc, Sl St",
        nazevCasti: "chapadla-harold",
        titulekCasti: "Tentacles",
        popis: ["6*(25Ch, change the direction of crocheting and alternate 2Dec, double Dec, SlSt, into the next chain again on the inside)"]
      },
      {
        obrazek: true,
        zkratkyCasti: null,
        nazevCasti: "vyplneni-harold",
        titulekCasti: "Filling",
        popis: ["Don't forget to fill it in."]
      },
      {
        obrazek: true,
        zkratkyCasti: "Dec, Sl St",
        nazevCasti: "uzavreni-harold",
        titulekCasti: "Closing off",
        popis: ["Dec", "SlSt to close off, leave a longer strand of yarn for sewing."]
      },
      {
        obrazek: true,
        zkratkyCasti: null,
        nazevCasti: "doplnky-harold",
        titulekCasti: "Details",
        popis: ["Create the eyebrows and mouth with black yarn."]
      }
    ]
  },
  {
    obtiznost: Obtiznost.tezky,
    nazev: "vodni-zelva",
    title: "Sea turtle",
    zkratky: "Mr, Sc, Ch, Sl St, Inc, Dec",
    pomucky: "Hook (size 3,5 mm), Needle, Yarn (Jeans), Stitch marker, Safety eyes (10 mm), Filling",
    premiove: true,
    popisy: [
      {
        obrazek: true,
        zkratkyCasti: "Mr, Inc, Sc, Dec, Sl St",
        nazevCasti: "hlava-zelva",
        titulekCasti: "Head",
        popis: ["Mr (6)", "Inc", "Sc, Inc", "2Sc, Inc", "3Sc, Inc", "4Sc, Inc", "Sc (4 rows)", "4Sc, Dec", "3Sc, Dec", "2Sc, Dec", "Sc, Dec", "Dec", "SlSt"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mr, Inc, Sc, Dec, Sl St",
        nazevCasti: "horni-cast-krunyre-zelva",
        titulekCasti: "Top part of shell",
        popis: ["Mr (6)", "Inc", "Sc, Inc", "2Sc, Inc", "3Sc, Inc", "4Sc, Inc", "5Sc, Inc", "6Sc, Inc", "Sc (3 rows)", "SlSt"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mr, Inc, Sc, Sl St",
        nazevCasti: "spodni-cast-krunyre-zelva",
        titulekCasti: "Bottom part of shell",
        popis: ["Mr (6)", "Inc", "Sc, Inc", "2Sc, Inc", "3Sc, Inc", "4Sc, Inc", "5Sc, Inc", "6Sc, Inc", "SlSt"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mr, Inc, Sc, Sl St",
        nazevCasti: "zadni-ploutev-zelva",
        titulekCasti: "Back fin (2x)",
        popis: ["Mr (6)", "Inc", "Sc, Inc", "2Sc, Inc", "3Sc, Inc", "4Sc, Inc", "SlSt", "After finish, fold the circle in half and sew it together."]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mr, Inc, Sc, Sl St",
        nazevCasti: "predni-ploutev-zelva",
        titulekCasti: "Front fin (2x)",
        popis: ["Mr (6)", "Inc", "Sc, Inc", "2Sc, Inc", "3Sc, Inc", "4Sc, Inc", "5Sc, Inc", "6Sc, Inc", "SlSt", "After finish, fold the circle in half and sew it together."]
      },
      {
        obrazek: false,
        zkratkyCasti: "Mr, Sc, Sl St",
        nazevCasti: "ocasek-zelva",
        titulekCasti: "Tail",
        popis: ["Mr (4)", "Sc (2 rows)", "SlSt"]
      },
    ],
  },
];

@Injectable({
  providedIn: 'root'
})
export class NavodyService {

  constructor(public translate: TranslateService) {
  }

  public getNavodyByName(name: string) {
    if (this.translate.currentLang === 'EN') {
      return poleNavoduEN.find(element => element.nazev == name);
    }
    else {
      return poleNavoduCZ.find(element => element.nazev == name);
    }
  }

  public getVsechnyNavody(): Array<Navod> {
    if (this.translate.currentLang === 'EN') {
      return poleNavoduEN;
    }
    else {
      return poleNavoduCZ;
    }
  }

  public getPopisy(titl: string): Array<PopisNavodu> {
    if (this.translate.currentLang === 'EN') {
      let index = poleNavoduEN.findIndex(x => x.title == titl);
    return poleNavoduEN[index].popisy;
    }
    else {
      let index = poleNavoduCZ.findIndex(x => x.title == titl);
    return poleNavoduCZ[index].popisy;
    }
  }
}
