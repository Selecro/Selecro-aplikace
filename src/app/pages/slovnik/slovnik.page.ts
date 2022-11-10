import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { Styl } from 'src/app/types';

@Component({
  selector: 'app-slovnik',
  templateUrl: './slovnik.page.html',
  styleUrls: ['./slovnik.page.scss'],
})

export class SlovnikPage implements OnInit {
  styl: Styl

  constructor(private dictionaryService: DictionaryService, private router: Router) { 
  }
  
  ngOnInit() {
    const nazev = (this.router.url.split('/'))[2];
    console.log(nazev);
    this.styl = this.dictionaryService.getStylByName(nazev);
  }
}
