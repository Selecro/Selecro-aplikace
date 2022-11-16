import { Injectable } from '@angular/core';
import { Pomucka, PopisPomucek } from '../types/pomucka'

 const polePomucek = [
  { nazev: "hacek", 
    titulek: "Háček", 
    videoURL: "XL4ze9vLC3s",
    kroky: [
      {
        index: 0,
        popis: "Existuje široká škála velikostí.",
        obrazek: " ",  
        exist: false, 
      },
      {
        index: 1,
        popis: "Háčky se dělají z různých materiálů.",
        obrazek: "hacek",  
        exist: true, 
      },
      {
        index: 2,
        popis: "Mohou být zdobeny rukojeťmi, ergonomickými úchyty a podobně.",
        obrazek: " ",  
        exist: false,   
      },
    ]},
   
    { nazev: "prize", 
    titulek: "Příze", 
    videoURL: "", 
    kroky: [
      {
        index: 0,
        popis: "Dnes můžeme najít obrovské množství značek a materiálů (akrylové, bavlněné, směsové).",
        obrazek: "prize",  
        exist: true, 
      },
      {
        index: 1,
        popis: "Na přebalu klubíčka bývá napsáno, kolik metrů obsahuje a na jak velký háček (popř. jehlice) je dělaná.",
        obrazek: " ",  
        exist: false, 
      },
      {
        index: 2,
        popis: "Samozřejmě můžete využít více velikostí na jeden typ příze (např.: Dolphin Baby se dá háčkovat s háčkem velikosti 4, 4.5 nebo 5 mm), ovlivňuje se tím však velikost oček.",
        obrazek: " ",  
        exist: false,   
      },
    ]},

    { nazev: "znackovac", 
    titulek: "Značkovač", 
    videoURL: "",
    kroky: [
      {
        index: 0,
        popis: "Slouží nám k označení počátku řady, ale dá se použít i jiný kousek příze.",
        obrazek: " ",  
        exist: false, 
      },
      {
        index: 1,
        popis: "Značkovač je příjemná pomůcka, která se na trhu objevuje ve více variantách. Spirála je vhodnější pro silnější příze.",
        obrazek: "znackovac-spirala",  
        exist: true, 
      },
      {
        index: 2,
        popis: "Tento má výhodu v tom, že se dá zavřít a je vhodný pro všechny typy příze.",
        obrazek: "znackovac",  
        exist: true,   
      }, 
    ]},

    { nazev: "jehla", 
    titulek: "Jehla",
    videoURL: "",
    kroky: [
      {
        index: 0,
        popis: "Na přišívání jednotlivých dílů, zapošívání nitě. Upřednostňované plastové jehly se více hodí, pokud děláte se silnějším typem příze.",
        obrazek: "jehla",  
        exist: true, 
      },
    ]},

    { nazev: "nuzky", 
    titulek: "Nůžky", 
    videoURL: "",
    kroky: [
      {
        index: 0,
        popis: "Nůžky asi už někdy používal každý z nás a u háčkování to není nějak zvlášť jiné.",
        obrazek: "",  
        exist: false, 
      },
      {
        index: 1,
        popis: "Klasické nůžky na papír nejsou na některé příze vhodné, protože potom ji přestříháváme na několikrát a akorát se nám konec třepí.",
        obrazek: "",  
        exist: false, 
      },
      {
        index: 2,
        popis: "Můžete si pořídit nůžky na látku, nebo různé speciálně zdobené, tvarované.",
        obrazek: "",  
        exist: false,   
      }, 
    ]},

    { nazev: "bezpecnostni-oci-a-nos", 
    titulek: "Bezpečnostní oči a nos", 
    videoURL: "",
    kroky: [
      {
        index: 0,
        popis: "Dnes se dá pořídit spousta tvarů, velikostí a barev očí a nosů s bezpečnostní pojistkou.",
        obrazek: "bezpecnostni-nos",  
        exist: true, 
      },
      {
        index: 1,
        popis: "Uzavírají se jednoduše. Na závit se postupně nasouvá pojistka, která jde zaklapnout tolikrát, kolik má očko závitů.",
        obrazek: "zavit-a-pojistka",  
        exist: true, 
      },
      {
        index: 2,
        popis: "Čím pevněji oko uzavřeme tím hezčí, nebo ošklivější efekt můžeme vytvořit. Je to kus od kusu, výrobek od výrobku.",
        obrazek: "bezpecnostni-oko",  
        exist: true,   
      }, 
    ]},

    { nazev: "chrastitko", 
    titulek: "Chrastítko", 
    videoURL: "",
    kroky: [
      {
        index: 0,
        popis: "Pokud chcete svůj výrobek nějak ozvláštnit pro dítě, nebo třeba domácího mazlíčka, můžete dovnitř přidat chrastítko.",
        obrazek: "chrastitko",  
        exist: true, 
      },
      {
        index: 1,
        popis: "Ty se dnes vyrábí v různých velikostech, tvarech a každé chrastí jinou intenzitou.",
        obrazek: "chrastitko-kulate",  
        exist: true, 
      },
    ]},

    { nazev: "pocitadlo", 
    titulek: "Počítadlo",
    videoURL: "",
    kroky: [
      {
        index: 0,
        popis: "Existuje počítadlo manuální a digitální. Obě mají stejný účel. Počítat řady, co jsme dosud vytvořili.",
        obrazek: "",  
        exist: false, 
      },
      {
        index: 1,
        popis: "Manuální může vypadat jako válec a každá jeho strana se dá otáčet. Měníme tak číslovky od 0 do 9. Některá se dají připojit na háček, jiná musíte stále brát a pokládat bokem.",
        obrazek: "manualni",  
        exist: true, 
      },
      {
        index: 2,
        popis: "Mnohem pohodlnější je z tohoto důvodu počítadlo digitální, které se dá připevnit na palec a pouhým mačkáním tlačítek buď posouváte číslo o , nebo celý proces resetujete. Existují i taková počítadla, která umí displej rozsvítit.",
        obrazek: "digitalni",  
        exist: true,   
      }, 
    ]},

    { nazev: "navijec-prize", 
    titulek: "Navíječ příze", 
    videoURL: "",
    kroky: [
      {
        index: 0,
        popis: "Když se vám klubíčko zasukuje tak, že ho musíte celé rozplést, nebo se vám rozkutálí, tak je navíječ pomocník pro vás. Jedná se o nástroj, který dělá z kusu provázku opět klubíčko. Jednoduše upevníte jeden konec na horní otáčecí válec, přízi napnete a pak už jen točíte kličkou. Navíječ vytvoří klubíčko",
        obrazek: "navijec-prize",  
        exist: true, 
      },
    ]},

    { nazev: "vypln", 
    titulek: "Výplň", 
    videoURL: "",
    kroky: [
      {
        index: 0,
        popis: "Pokud vytváříte něco prostorového (zvířátka, hračky, atd...), tak se vám bude hodit nějaká výplň. Tu může tvořit vata, nebo duté vlákno. Po delší době háčkování můžete použít i zbytky přízí z minulého tvoření. Je to taková recyklace, kterou já uplatňuji třeba u jehelníčků",
        obrazek: "vypln",  
        exist: false, 
      },
    ]}
  ];


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
