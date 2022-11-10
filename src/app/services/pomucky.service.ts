import { Injectable } from '@angular/core';
import { Pomucka } from '../types/pomucka'

 const polePomucek = [{ nazev: "hacek", titulek: "Háček", popis: " ", popis1: "hb", popis2: "bhb", fotka: "  hhb", fotka1: "b b", fotka2: "bhb", videoURL: "vvv" },
    { nazev: "prize", titulek: "Příze", popis: "", popis1: "", popis2: "", fotka: "", fotka1: "", fotka2: "", videoURL: "" }, 
    { nazev: "znackovac", titulek: "Značkovač", popis: "", popis1: "", popis2: "", fotka: "", fotka1: "", fotka2: "", videoURL: "" },
    { nazev: "jehla", titulek: "Jehla", popis: "", popis1: "", popis2: "", fotka: "", fotka1: "", fotka2: "", videoURL: "" },
    { nazev: "nuzky", titulek: "Nůžky", popis: "", popis1: "", popis2: "", fotka: "", fotka1: "", fotka2: "", videoURL: "" },
    { nazev: "bezpecnostni-oci-a-nos", titulek: "Bezpečnostní oči a nos", popis: "", popis1: "", popis2: "", fotka: "", fotka1: "", fotka2: "", videoURL: "" },
    { nazev: "chrastitko", titulek: "Chrastítko", popis: "", popis1: "", popis2: "", fotka: "", fotka1: "", fotka2: "", videoURL: "" },
    { nazev: "pocitadlo", titulek: "Počítadlo", popis: "", popis1: "", popis2: "", fotka: "", fotka1: "", fotka2: "", videoURL: "" },
    { nazev: "navijec-prize", titulek: "Navíječ příze", popis: "", popis1: "", popis2: "", fotka: "", fotka1: "", fotka2: "", videoURL: "" }]



@Injectable({
  providedIn: 'root'
})
export class PomuckyService {

  pomucky: Map<string, Pomucka>;

  constructor() {
    this.initMap();
  }

  public getPomuckaByName(name: string): Pomucka{
    return this.pomucky.get(name);
  }

  private initMap(){
    this.pomucky = new Map();
    polePomucek.forEach(pomucka=>{
      this.pomucky.set(pomucka.nazev, pomucka);
    });
  }
}
