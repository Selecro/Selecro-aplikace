import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { Styl } from 'src/app/types';

@Component({
  selector: 'app-styly',
  templateUrl: './styly.page.html',
  styleUrls: ['./styly.page.scss'],
})
export class StylyPage implements OnInit {

  styl: Styl

  constructor(private dictionaryService: DictionaryService, private router: Router) { 
    
  }

  ngOnInit() {
    const nazev = (this.router.url.split('/'))[2];
    this.styl = this.dictionaryService.getStylByName(nazev);
  }

}
