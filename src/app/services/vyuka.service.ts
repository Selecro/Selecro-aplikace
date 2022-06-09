import { Injectable } from '@angular/core';
import {Navod,Postup} from '../types'

const poleNavodu: Array<Navod>= [
  {nazev: "Chobotnicka",
   popis: "Navod na vytvoreni chobotnicky",
   kroky:[{
     nazev: '1. krok',
     pouzijeme: "Mk",
     popis:" Nejdůležitější na tomto kroku je neutahovat, abyste byli schopni konečný výsledek utáhnout. Neustále si hlídám zadní nit, aby mi neutekla. Potřebujeme ji tam mít zaháčkovanou, abychom měli vůbec možnost utáhnout celý kroužek.</p><p>Postup na magický kroužek je uveden ve slovníku v jeho samostatné kapitole. Existuje však spousta způsobů, jak jej vytvořit. Ve většině způsobů se dostanete ke stejnému základu, jako ve videu (viz 35 vteřina). Můžeme k tomu však použít i pouhá 2 řetízková oka, vrátit se a udělat do toho prvního 6 ks.",
     videoUrl: "dBmU8n4AfDg"
   }
 ]
 }
]
 @Injectable({
  providedIn: 'root'
})
export class VyukaService {

  mapaNavodu: Map<string,Navod>;

  constructor() {
    this.initMap();
  }

  public getVideoByName(name: string): Navod{
    return this.mapaNavodu.get(name);
  }

  private initMap(){
    this.mapaNavodu = new Map();
    poleNavodu.forEach(vyuka=>{
      this.mapaNavodu.set(vyuka.nazev, vyuka);
    });
  }

  public getNavodByName(name: string): Navod{
    return this.mapaNavodu.get(name);
  }

  public getVsechnyNavody(): Array<Navod>{
    return poleNavodu;
  }
}
