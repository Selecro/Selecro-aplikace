import { Injectable } from '@angular/core';
import {Video} from '../types'

 const poleVidei = [{nazev: "Chobotnicka", krok: 1, pouzijeme: "Mk", popis:" Nejdůležitější na tomto kroku je neutahovat, abyste byli schopni konečný výsledek utáhnout. Neustále si hlídám zadní nit, aby mi neutekla. Potřebujeme ji tam mít zaháčkovanou, abychom měli vůbec možnost utáhnout celý kroužek.</p><p>Postup na magický kroužek je uveden ve slovníku v jeho samostatné kapitole. Existuje však spousta způsobů, jak jej vytvořit. Ve většině způsobů se dostanete ke stejnému základu, jako ve videu (viz 35 vteřina). Můžeme k tomu však použít i pouhá 2 řetízková oka, vrátit se a udělat do toho prvního 6 ks.", url: "dBmU8n4AfDg"} ]



@Injectable({
  providedIn: 'root'
})
export class VideoService {

  videa: Map<string,Video>;

  constructor() {
    this.initMap();
  }

  public getVideoByName(name: string): Video{
    return this.videa.get(name);
  }

  private initMap(){
    this.videa = new Map();
    poleVidei.forEach(video=>{
      this.videa.set(video.nazev, video);
    });
  }
}
