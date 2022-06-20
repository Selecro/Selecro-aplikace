import { Injectable } from '@angular/core';
import { Vyrobek } from '../types'

const poleVyrobku: Array<Vyrobek>= [
  {nazev: "Chobotnicka",
   popis: "Navod na vytvoreni chobotnicky",
   kroky:[{
     cislo: '1.',
     styl: "Mk",
     pouzijeme: "Háček, značkovač",
     popis:"Nejdůležitější na tomto kroku je neutahovat, abyste byli schopni konečný výsledek utáhnout. Neustále si hlídám zadní nit, aby mi neutekla. Potřebujeme ji tam mít zaháčkovanou, abychom měli vůbec možnost utáhnout celý kroužek.</p><p>Postup na magický kroužek je uveden ve slovníku v jeho samostatné kapitole. Existuje však spousta způsobů, jak jej vytvořit. Ve většině způsobů se dostanete ke stejnému základu, jako ve videu (viz 35 vteřina). Můžeme k tomu však použít i pouhá 2 řetízková oka, vrátit se a udělat do toho prvního 6 ks.",
     videoUrl: "06DsV4I1fN8"
    },
    {
      cislo: '2.',
      styl: "V",
      pouzijeme: "Háček, značkovač",
      popis: "Tomuto kroku se říká rozháčkování, nebo-li rozšiřování. Díky němu budeme schopni náš výrobek zvětšovat. Rozháčkování lze aplikovat na skoro na každý styl. Nejčastěji je používám v souvislosti s krátkým, dlouhými, nebo polodlouhými sloupky.</p><p>Stále si budeme udržovat zadní nit v kroku, abychom mohli utáhnout a zbavit se tak případné mezery v magickém kroužku.",
      videoUrl: "TW0VbGVXBps"
     },
     {
      cislo: '3.',
      styl: "Ks, V",
      pouzijeme: "Háček, značkovač",
      popis:"Postupné rozšiřování. Pokud chceme tvořit pravidelný tvar, je potřeba pravidelně výrobek zvětšovat. Kvůli tomu budeme postupovat tak, že budeme stále používat rozháčkování, ale v kombinaci s krátkými sloupky. </p><p>Představte si to, jako by minulý krok byl 0ks, V a teď budeme pokračovat 1ks, V a pak 2ks, V.",
      videoUrl: "Ivyrl2Mb2o8"
     },
     {
      cislo: '4. a 5.',
      styl: "Ks",
      pouzijeme: "Háček, značkovač",
      popis:"Následující 2 řady budou stejné, abychom docílili nějakého tvaru. Rozšířili jsme dostatečně, ale za pomoci těchto řad se nám chobotnička ještě trošku zvětší. Kdybyste ji chtěli vyšší, musíte přidat více řad.",
      videoUrl: "WJJbSN6qTpc"
     },
     {
      cislo: '6.',
      styl: "Ks, A",
      pouzijeme: "Háček, značkovač",
      popis:"Stejně jako u kroku 3 jsme zvětšovali chobotničku, tak teď ji budeme pro změnu uzavírat. Opět to napomáhá k tvarování hlavičky chobotnice. Značka <i>A</i> je stažení, jinak řečeno sháčkování. Docílíme ho za pomoci spojení 2 krátkých sloupků.",
      videoUrl: "MwfZ48fExG0"
     },
     {
      cislo: '7.',
      styl: "A",
      pouzijeme: "Háček, značkovač",
      popis:"Tímto krokem pokračujeme v postupném sháčkování. U většiny výrobků by byl tohle poslední krok, ale tím, že mi děláme chapadla jednolitě s hlavičkou, budeme pokračovat. Je potřeba tento krok moc nestahovat. Snažit se dělat větší mezery, aby se dalo navázat chapadly.</p><p>Posledním pevným okem celý výrobek uzavřeme a je nutné nechat si delší konečnou nit, abychom měli po vyplnění, jak uzavřít spodek chobotničky.",
      videoUrl: "GAR5JQXzk88"
     },
     {
      cislo: '8.',
      styl: "Po, Pds, Ds",
      pouzijeme: "Háček, značkovač",
      popis:"Pevné očko, polodlouhý sloupek, dlouhý sloupek, polodlouhý. Tato kombinace půjde do každého jednoho oka. Čili v konečném výsledku budeme opakovat 6krát. Vytváříme tím obloučky, které v našem případě zastávají chapadla. </p><p>Pevné očko v tomto případě tvoří přechod mezi jednotlivými chapadly, dlouhé a polodlouhé sloupky naopak dodávají tvar.</p><p>Je to docela blízko sebe, tak dávejte pozor, ať nevynecháte.",
      videoUrl: "iXgXMEuX-HE"
     },
     {
      cislo: '9.',
      styl: " ",
      pouzijeme: "Bezpečnostní očka",
      popis:" Přidělávání bezpečnostních oček není vždy úplně jednoduché. Je spousta z nás, co se dívají, aby očka nebyla křivě a dlouze si nad tím lámeme hlavu. Nebojte, mám to stejně.</p><p>Takovou malou pomůckou by nám mělo být počítání řad. Pak by se očka měla nacházet v rovině. </p><p>Vždy vyrovnání očí kontrolujte před použitím pojistky. Některá očka k sobě mají pojistky, které se dají horko těžko zacvaknout, natož oddělat.",
      videoUrl: "MPAzRwy3-g0"
     },
     {
      cislo: '10.',
      styl: " ",
      pouzijeme: "Pojistka, výplň",
      popis:"Bezpečnostní očko se dá zacvaknout tolikrát, kolik máme závitů na očku. Ovšem čím větší je pojistka a tenčí je příze, tím více je pojistka znatelná. Někdy nám pomáhá v optickém zkrášlení obličeje (jako mělo zvířátko najednou hezčí očka). </p><p>Chobotničku si musíme samozřejmě vyplnit. Takže popadněte vadu, duté vlákno, staré odstřižky a jdeme na to. S vyplňováním to nemusíte moc přehánět, aby se vám povedlo zapošití.",
      videoUrl: "dBmU8n4AfDg"
     },
     {
      cislo: '11.',
      styl: " ",
      pouzijeme: "Jehla",
      popis:"Zašíváme tak, že si na jehlu navlečeme přízi, kterou jsme ukončovali. Tu budeme nejprve provlékat všemi oky typu A. Tímto krokem docílíme stažení. Ovšem pokud to někdo při plnění trochu přehnal, tak nám stále zůstává otvor. </p><p>Šití je podle mého názoru hodně individuální, proto je čistě na vás, zda budete šít podle mého vzoru, nebo si najedete vlastní styl. Každopádně hodně utahujte. </p><p>Nejdůležitější je však zakončení celé práce tak, aby se vám výrobek nerozpletl. Respektive to šití se nevyvléklo.",
      videoUrl: "IwOXPcn8H3E"
     },
     {
      cislo: '12.',
      styl: " ",
      pouzijeme: "Jehla, nůžky",
      popis:"Zakončení probíhá následovně. Vyberu si nějaké nahodilé místo, kde s nití vyjedu (většinou na zádech tvorečka), zabořím se do očka vedle s tím, že vyjedu ve stejném oku jako poprvé. Nestáhnu to úplně, ale tak, aby mi zůstal malinký oblouček, kterým konec protáhneme a stáhneme. Vznikne uzlík a na jehle zůstane nit. Tu nahodile zasuneme do výrobku a vynoříme se nejlépe na druhé straně. </p><p>Jehlu můžeme zahodit a vezmeme si nůžky. Nitku napneme a co nejblíže výrobku ustřihneme.",
      videoUrl: "70BrpsQ4lzo"
     }
  ]},

  {nazev: "Růže",
  popis: "Vytvořme si společně okrasnou růži společně s listem.",
  kroky:[{
    cislo: '1.',
    styl: " ",
    pouzijeme: "Háček",
    popis:"Vytvoříme si základ pro tvoření řetízkového oka. Kolem ukazováčku a prostředníčku levé ruky obmotáme přízi. Položím na vnitřní stranu prstů a palcem přidržím, obtočím jednou, vytvořím na vnitřku kříž a rovnoběžně znovu obtočím kolem prstů. Přední nit podeberu spodem a druhou vrchem. Zaháknu se za ni a protáhnu ji přes tu první. ",
    videoUrl: "XL4ze9vLC3s"
    },
    {
    cislo: '2.',
    styl: "Řo",
    pouzijeme: "Háček",
    popis:"Teď máme na háčku vytvořený uzlík, nabereme přízi a protáhneme ji okem. Zase je jedno na háčku, naberu přízi a protáhnu. Takto celkem 27krát.",
    videoUrl: "jOlXPt2eARQ"
    },
    {
    cislo: '3.',
    styl: "Ds, Řo",
    pouzijeme: "Háček",
    popis:"Začneme odpočítáním třetího očka, a tam vytvoříme dlouhé sloupky, celkem 2 do jednoho oka. Přidáme řetízkové oko, které nám pomáhá vytvářet květy.",
    videoUrl: "X8WGTnnEC_A"
    },
    {
    cislo: '4.',
    styl: "Ds, Řo",
    pouzijeme: "Háček",
    popis:"Abychom vynahradili mezeru vzniklou řetízkovým okem, tak jedno oko na řetězu vynecháme. Další krok tedy bude ob jedno oko. 3 dlouhé sloupky do jednoho oka, řetízkové oko a takto pořád dokola, dokud nejsme na konci.",
    videoUrl: "Y_pbeKZayz8"
    },
    {
    cislo: '5.',
    styl: "Ds, Řo",
    pouzijeme: "Háček",
    popis:"Vytvoříme 2 řetízková oka, abych nám vznikla jakási nadstavba. Otočíme celý výrobek na druhou stranu (tzv. výrobek převrátíme) a pokračujeme druhou řadou.</p><p>Háčkujeme opakovaně dlouhý sloupek, do dalšího oka 2krát dlouhý sloupek, další oko opět jednou a 2 řetízková oka, která ukončíme v místě předešlého řetízkového očka z kroku 3 a 4.</p><p>Konkrétně si můžete vybrat mezi krátkým sloupkem, nebo pevným očkem (obojí ukázáno na videu), rozdíl je ve stažení a tedy i mezeře mezi listy.",
    videoUrl: "i67kKrqFqRY"
    },
    {
    cislo: '6.',
    styl: "Ds, Řo",
    pouzijeme: "Háček",
    popis:"Pokračujeme stejným způsobem. 2 řetízková oka, nahodím, vytvořím dlouhý sloupek do dalšího oka, pak 2 dlouhé sloupky do jednoho, v dalším bude opět jedno a pak 2 řetízková oka, ukončena krátkým sloupkem, nebo pevným očkem v místě řetízkového očka předešlé řady.",
    videoUrl: "oPUgWP9Lglw"
    },
    {
    cislo: '7.',
    styl: "Řo, Ds, Po",
    pouzijeme: "Háček",
    popis:"Poslední lístek se dělá stejně, jako ty doposud, jediný rozdíl je v tom, že poslední dvojice řetízkových oček se ukončí 2 očka dolů po straně. </p><p>Po zakončení pevným okem, máme kytičku hotovou a můžeme ji jít točit a tvarovat.",
    videoUrl: "p-SBATchhlo"
    },
    {
    cislo: '8.',
    styl: " ",
    pouzijeme: "Jehla",
    popis:"Růži se snažím smotat, co nejvíc to jde, aby jako růže vypadala. Hodně tahám a tlačím při rolování. Pak to musíme podchytit tím, že to zašijeme. Šití je podle mě intuitivní, takže je to čistě na vás, já jen ukazuju příklad toho, jak to dělám já.",
    videoUrl: "vO_Qf_xJh9w"
    },
    {
    cislo: '9.',
    styl: " ",
    pouzijeme: "Jehla",
    popis:"Zakončení je vždy to nejdůležitější a dělá se to poměrně jednoduše. Když jsme spokojená s šitím a drží mi výrobek tvar, tak mohu zakončit. Vyberu si bod, ve kterém vyjedu jehlou a protáhnu nit. Následně bodnu do očka vedle mého místa výsunu a mířím do očka, z něhož vychází nit. Opatrně utahuju, ale ne moc, potřebujeme se dostat do onoho oka, co se tvoří.</p><p>Opět je to individuální, jak to uděláte a tohle je jenom můj příklad.",
    videoUrl: "vELtmQHUzOM"
    },
    {
    cislo: '10.',
    styl: "Řo",
    pouzijeme: "Háček",
    popis:"Počneme si list. Můžete jich mít libovolné množství, ale musíte se vrátit zpět k tomuto kroku, abyste mohli podle videí tvořit znova. </p><p>Uděláme 13 řetízkových ok.",
    videoUrl: "oqk38lrk-JQ"
    },
    {
    cislo: '11.',
    styl: "Ds",
    pouzijeme: "Háček",
    popis:"Odpočítám si 3 očka a do toho třetího udělám 2 DS. Další oko je pro mě obohaceno dlouhými sloupky s rozdílem toho, že místo jednoho nahození nastanou dvě. Je to pořád to samé. Do jednoho oka celkem 2 krát.",
    videoUrl: "StfiMAJ2POc"
    },
    {
    cislo: '12.',
    styl: "Ds",
    pouzijeme: "Háček",
    popis:"Stejně pokračuju i nadále s rozdílem toho, že do každého jednoho oka padne jeden dlouhý sloupek s dvojitým nahozením. Do následujících 3 oček.",
    videoUrl: "fxHwZU5r5fw"
    },
    {
    cislo: '13.',
    styl: "Ds, Pds",
    pouzijeme: "Háček",
    popis:"Do dvou po sobě jdoucích ok uděláme klasický dlouhý sloupek, jednou nahodím, dvakrát protáhnu. Pak polodlouhý, jednou nahodím a jednou protáhnu.",
    videoUrl: "ebjvvrVYHnI"
    },
    {
    cislo: '14.',
    styl: "Pds, Ks",
    pouzijeme: "Háček",
    popis:"Jeden krátký sloupek, do dalšího oka 3 a zase jedno. Potom děláme to samé, co na druhé straně akorát obráceně. Tak pojďme na to. Jeden polodlouhý sloupek prosím!",
    videoUrl: "Qf99mIRTvas"
    },
    {
    cislo: '15.',
    styl: "Ds",
    pouzijeme: "Háček",
    popis:"Dva klasické dlouhé sloupky, jedno nahození a dvě protažení. Potom třikrát dlouhý sloupek po dvou nahozeních a 3 protaženích. Dva krát do jednoho očka ten dlouhý sloupek o dvou nahozeních. Předposlední očko si ponese 3 dlouhé sloupky.",
    videoUrl: "KYN4iC1lsKA"
    },
    {
    cislo: '16.',
    styl: "Po, Řo, Ks",
    pouzijeme: "Háček",
    popis:"Pevným okem propojíme náš konec se začátkem výrobku a pokračujeme 3 řetízkovými očky. Výrobek otočím a udělám 2 krátké sloupky. Pak pevným okem zakončím a mám list i s malým stonkem. Ovšem není nutný a pokud se vám nelíbí, nemusí tam vůbec být.</p><p>List přišijeme k růži.",
    videoUrl: "Rt7hW4sszoo"
    },
    {
    cislo: '17.',
    styl: " ",
    pouzijeme: "Jehla",
    popis:"Dá se zakončit poměrně neviditelně, uvnitř jednoho kvítku, jako je ve videu.",
    videoUrl: "0eHFJNXWfUw"
    }
  ]
  },
  {nazev: "Záložka",
  popis: "Veselá záložka do knihy pro malé i velké.",
  kroky:[{
    cislo: '1.',
    styl: "Mk",
    pouzijeme: "Mk",
    popis:" Nejdůležitější na tomto kroku je neutahovat, abyste byli schopni konečný výsledek utáhnout. Neustále si hlídám zadní nit, aby mi neutekla. Potřebujeme ji tam mít zaháčkovanou, abychom měli vůbec možnost utáhnout celý kroužek.</p><p>Postup na magický kroužek je uveden ve slovníku v jeho samostatné kapitole. Existuje však spousta způsobů, jak jej vytvořit. Ve většině způsobů se dostanete ke stejnému základu, jako ve videu (viz 35 vteřina). Můžeme k tomu však použít i pouhá 2 řetízková oka, vrátit se a udělat do toho prvního 6 ks.",
    videoUrl: "dBmU8n4AfDg"
    }
  ]
}]

@Injectable({
  providedIn: 'root'
})
export class VyukaService {

  mapaVyrobku: Map<string,Vyrobek>;

  constructor() {
    this.initMap();
  }

  public getVideoByName(name: string): Vyrobek{
    return this.mapaVyrobku.get(name);
  }

  private initMap(){
    this.mapaVyrobku = new Map();
    poleVyrobku.forEach(vyuka=>{
      this.mapaVyrobku.set(vyuka.nazev, vyuka);
    });
  }

  public getVyrobekByName(name: string): Vyrobek {
    return this.mapaVyrobku.get(name);
  }

  public getVsechnyVyrobky(): Array<Vyrobek>{
    return poleVyrobku;
  }
}
