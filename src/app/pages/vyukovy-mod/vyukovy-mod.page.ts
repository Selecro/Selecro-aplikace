import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vyukovy-mod',
  templateUrl: './vyukovy-mod.page.html',
  styleUrls: ['./vyukovy-mod.page.scss'],
})
export class VyukovyModPage implements OnInit {

  items = [
    {
      nazev: "Chobotnička",
      obrazek: "chobotnicka",
      cas: "20 min.",
      pocet: "11",
      kroky:  [{
        krok: 1,
        popis: "popis",
        video:  "video",
      }
      ]
    },
    {
      nazev: 'Růže a list',
      popis: "ruze",
    },
    {
      nazev: 'Záložka',
      popis: "zalozka",
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
