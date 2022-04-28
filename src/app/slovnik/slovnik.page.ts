import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slovnik',
  templateUrl: './slovnik.page.html',
  styleUrls: ['./slovnik.page.scss'],
})
export class SlovnikPage implements OnInit {
  slovnik : Array<String> = ["string1", "string2"];

  

  constructor() { }

  ngOnInit() {
  }

  buttonClick() {
    console.log("Klik");
  }
}
