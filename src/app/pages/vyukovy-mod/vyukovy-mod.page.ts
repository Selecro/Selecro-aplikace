import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vyukovy-mod',
  templateUrl: './vyukovy-mod.page.html',
  styleUrls: ['./vyukovy-mod.page.scss'],
})
export class VyukovyModPage implements OnInit {

  items = [
    {
      nazev: 'nazev',
      popis: "popis",
      kroky:  [{
        popis: "popis",
        video:  "video"
      }
      ]
    },
    {
      nazev: 'nazev',
      popis: "popis"
    },
    {
      nazev: 'nazev',
      popis: "popis"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
