import { Injectable } from '@angular/core';
import { Navod, Obtiznost, PopisNavodu } from '../types';

const poleNavodu = [
  /*{
    obtiznost: Obtiznost.lehky,
    nazev: "dinosaurus",
    title: "Dinosaurus",
    zkratky: "Mk, V, Ks, A, Po, Řo",
    premiove: false,
    pocet: 7,
    popisy: [
      {
        obrazek: true,
        zkratkyCasti: null,
        nazevCasti: "dinosaurus",
        titulekCasti: "Příprava",
        popis: ["Háček (velikost 4,5 mm)", "Dolphin Baby 2 klubka na tělo", "Dolphin Baby 1 na ostny", "Kousek černé příze na nozdry", "Bezpečnostní očka (velikost 10 mm)", "Značkovač", "Nůžky", "Výplň", "Jehla"]
      },
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
  },*/
  {
    obtiznost: Obtiznost.lehky,
    nazev: "harold",
    title: "Harold",
    zkratky: "Mk, Ks, Řo, Po, V, A",
    premiove: false,
    pocet: 5,
    popisy: [
      {
        obrazek: true,
        zkratkyCasti: null,
        nazevCasti: "harold",
        titulekCasti: "Příprava",
        popis: ["Háček (velikost 3 mm)", "Bezpečnostní očka (velikost 10 mm)", "YarnArt Jeans 1 klubko", "Kousek černé na doplňky", "Výplň", "Značkovač", "Nůžky", "Jehla"]
      },
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
    obtiznost: Obtiznost.stredni,
    nazev: "vodni-zelva",
    title: "Vodní želva",
    zkratky: "Mk, Ks, Řo, Po, V, A",
    premiove: true,
    pocet: 6,
    popisy: [
      {
        obrazek: true,
        zkratkyCasti: null,
        nazevCasti: "vodni-zelva",
        titulekCasti: "Příprava",
        popis: ["Háček (velikost 3 mm)", "YarnArt Jeans 1 klubíčko na tělo", "YarnArt Jeans 1 klubíčko na krunýř", "Kousek černé a růžové na doplňky", "Bezpečnostní očka (10 mm)", "Značkovač", "Výplň", "Nůžky", "Jehla"]
      },
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
        obrazek: true,
        zkratkyCasti: "Mk, Ks, Po",
        nazevCasti: "ocasek-zelva",
        titulekCasti: "Ocásek",
        popis: ["Mk (4)", "ks (2 řady)", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: null,
        nazevCasti: "doplnky-zelva",
        titulekCasti: "Doplňky",
        popis: ["Dá se vytvořit pusinka", "Další možnost je našít růžové tváře"]
      },
    ],
  },
  {
    obtiznost: Obtiznost.lehky,
    nazev: "obraceci-chobotnicka",
    title: "Obracecí chobotnička",
    zkratky: "Mk, Ks, Řo, Po, PDS, V, A",
    premiove: false,
    pocet: 7,
    popisy: [
      {
        obrazek: true,
        zkratkyCasti: null,
        nazevCasti: "obraceci-chobotnicka",
        titulekCasti: "Příprava",
        popis: ["Háček (velikost 3 mm)", "YarnArt Jeans 2 klubíčka (každé jiné barvy)", "YarnArt Jeans černá na oči a doplňky", "Značkovač", "Nůžky", "Jehla"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, A, Po",
        nazevCasti: "hlava-obraceci-chobotnicka",
        titulekCasti: "Hlava (2x)",
        popis: ["Mk (8)", "V", "ks, V", "2 ks, V", "ks (10 řad)", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: null,
        nazevCasti: "sesiti-hlava-obraceci-chobotnicka",
        titulekCasti: "Sešití hlav",
        popis: ["Jednu hlavu obrátím vzhůru nohama", "Obrácenou hlavu vložím do té druhé", "Sešívám delší nití", "Nezapomenu na konci zapošít, aby hlavy držely při otáčení"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Řo, PDS, Po",
        nazevCasti: "chapadlo-obraceci-chobotnicka",
        titulekCasti: "Chapadlo (16x)",
        popis: ["6Řo", "Obracím směr 4PDS, 5PDS do jednoho oka, 4PDS", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: null,
        nazevCasti: "sesiti-chapadlo-obraceci-chobotnicka",
        titulekCasti: "Sešití chapadla (8x)",
        popis: ["Vezmu jedno chapadlo od každé barvy a dám je pohledovou stranou do sebe", "Sešivám je nejdelší ze čtyř nití, co z nich vysí", "K tělu budu přišívat na 4 oka bez mezery"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, Po",
        nazevCasti: "stastna-obraceci-chobotnicka",
        titulekCasti: "Šťastné oko (2x)",
        popis: ["Mk (5)", "V", "ks, V", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, Ks, Řo, Po",
        nazevCasti: "nastvana-obraceci-chobotnicka",
        titulekCasti: "Naštvané oči (2x)",
        popis: ["Levé: Mk (5)", "Řo, otočím, 5ks, 2Řo, 3ks, Po", "Pravé: Mk (5)", "Řo, 7ks, 2Řo, ks, Po"]
      },
      {
        obrazek: false,
        zkratkyCasti: null,
        nazevCasti: "dolpnky-obraceci-chobotnicka",
        titulekCasti: "Doplňky",
        popis: ["Dá se přidat ještě pusinka", "Bílá čárka do oka"]
      },
    ],
  },
  {
    obtiznost: Obtiznost.tezky,
    nazev: "pavouk",
    title: "Pavouk",
    zkratky: "Mk, Ks, Řo, Po, PDS, V, A",
    premiove: false,
    pocet: 0,
    popisy: [
      {
        obrazek: false,
        zkratkyCasti: null,
        nazevCasti: "pavouk",
        titulekCasti: "Příprava",
        popis: ["Háček (velikost 3 mm)", "YarnArt Jeans 1 klubíčko", "Jakákoliv tenká příze s chlupem (nepovinné)", "Kousek černé na pusu", "Bezpečnostní očka (velikost 10 mm a 8 mm)", "Značkovač", "Výplň", "Nůžky", "Jehla"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, A, Po",
        nazevCasti: "hlava-pavouk",
        titulekCasti: "Hlava",
        popis: ["Mk (6)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5ks, V", "ks (2 řady)", "5ks, A", "4ks, A", "3ks, A", "2ks, A", "ks, A", "A", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, A, Po",
        nazevCasti: "telo-pavouk",
        titulekCasti: "Tělo",
        popis: ["Mk (6)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5ks, V", "6ks, V", "ks (3 řady)", "6ks, A", "5ks, A", "ks (1 řada)", "4ks, A", "3ks, A", "ks (1 řada)", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, Po",
        nazevCasti: "prvni-noha-pavouk",
        titulekCasti: "První noha (2x)",
        popis: ["Mk (6)", "2ks, V", "ks (4 řady)", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, PDS, Po",
        nazevCasti: "druha-noha-pavouk",
        titulekCasti: "Druhá noha (2x)",
        popis: ["Mk (6)", "2ks, V", "ks (3 řady)", "3Po, ks, 3PDS, ks", "ks (3 řady)", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, PDS, Po",
        nazevCasti: "treti-noha-pavouk",
        titulekCasti: "Třetí noha (2x)",
        popis: ["Mk (6)", "2ks, V", "ks (4 řady)", "3Po, ks, 3PDS, ks", "ks (4 řady)", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, PDS, Po",
        nazevCasti: "ctvrta-noha-pavouk",
        titulekCasti: "Čtvrtá noha (2x)",
        popis: ["Mk (6)", "2ks, V", "ks (5 řad)", "3Po, ks, 3PDS, ks", "ks (5 řad)", "Po"]
      },
      {
        obrazek: true,
        zkratkyCasti: "Mk, V, Ks, Po",
        nazevCasti: "zub-pavouk",
        titulekCasti: "Zub (2x)",
        popis: ["Mk (6)", "2ks, V", "ks (2 řady)", "Po"]
      },
      {
        obrazek: false,
        zkratkyCasti: null,
        nazevCasti: "doplnky-pavouk",
        titulekCasti: "Doplňky",
        popis: ["Chloupky na nohou", "Pusinka"]
      },
    ],
  },
];

@Injectable({
  providedIn: 'root'
})
export class NavodyService {

  constructor() {
  }

  public getNavodyByName(name: string) {
    return poleNavodu.find(element => element.nazev == name);
  }

  public getVsechnyNavody(): Array<Navod> {
    return poleNavodu;
  }

  public getPopisy(titl: string): Array<PopisNavodu> {
    let index = poleNavodu.findIndex(x => x.title == titl);
    return poleNavodu[index].popisy;
  }
}
