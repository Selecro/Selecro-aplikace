import { Injectable } from '@angular/core';
import {Styl} from '../types'

 const poleStylu = [{nazev: 'retizkove-oko', titulek: "Řetízkové oko", zkratka: "Řo", znacka: "assets/icon/RO.png", popis: "ksdjbgvj", animace: "assets/icon/ro-animace.gif" },
  {nazev: 'pevne-oko', titulek: "Pevné oko", zkratka: "Po", znacka: "assets/icon/PO.png", popis: "ksdjbgvj", animace: "assets/icon/ro-animace.gif" },
  {nazev: 'kratky-sloupek', titulek: "Krátký sloupek", zkratka: "Ks", znacka: "assets/icon/KS.png", popis: "ksdjbgvj", animace: "assets/icon/ro-animace.gif" },
  {nazev: 'dlouhy-sloupek', titulek: "Dlouhý sloupek", zkratka: "Ds", znacka: "assets/icon/DS.png", popis: "ksdjbgvj", animace: "assets/icon/ro-animace.gif" },
  {nazev: 'polodlouhy-sloupek', titulek: "Polodlouhý sloupek", zkratka: "Pds", znacka: "assets/icon/PDS.png", popis: "ksdjbgvj", animace: "assets/icon/ro-animace.gif" },
  {nazev: 'rozhackovani', titulek: "Rozháčkování", zkratka: "V", znacka: "assets/icon/V.png", popis: "ksdjbgvj", animace: "assets/icon/ro-animace.gif" },
  {nazev: 'shackovani', titulek: "Sháčkování", zkratka: "A", znacka: "assets/icon/A.png", popis: "ksdjbgvj", animace: "assets/icon/ro-animace.gif" },
  {nazev: 'magicky-krouzek', titulek: "Magický kroužek", zkratka: "Mk", znacka: "assets/icon/MK.png", popis: "ksdjbgvj", animace: "assets/icon/ro-animace.gif" }, ]



@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  styly: Map<string,Styl>;

  constructor() {
    this.initMap();
  }

  public getStylByName(name: string): Styl{
    return this.styly.get(name);
  }

  private initMap(){
    this.styly = new Map();
    poleStylu.forEach(styl=>{
      this.styly.set(styl.nazev, styl);
    });
  }
}
