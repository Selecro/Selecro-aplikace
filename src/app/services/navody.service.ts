import { Injectable } from '@angular/core';
import { Navod } from '../types';

 const poleNavodu = [{nazev: "Dinosaurus",zkratka: "Mk, V, Ks, A, Po, Řo", pomucky: "Háček velikosti 2mm, jehla, značkovač, duté vlákno, bezpečnostní očka", popis: ""}];


@Injectable({
  providedIn: 'root'
})
export class NavodyService {

  navody: Map<string,Navod>;

  constructor() {
    this.initMap();
  }

  public getNavodByName(name: string): Navod{
    return this.navody.get(name);
  }

  private initMap(){
    this.navody = new Map();
    poleNavodu.forEach(navod=>{
        this.navody.set(navod.nazev, navod);
    });
  }
}
