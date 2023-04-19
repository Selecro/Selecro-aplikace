import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Pomucka } from '../types'

const polePomucekCZ = [
  {
    nazev: "hacek",
    title: "Háček",
    videoURL: "XL4ze9vLC3s",
    kroky: [
      {
        popis: "Existuje široká škála velikostí.",
        obrazek: null,
        exist: false,
      },
      {
        popis: "Háčky se dělají z různých materiálů.",
        obrazek: "hacek",
        exist: true,
      },
      {
        popis: "Mohou být zdobeny rukojeťmi, ergonomickými úchyty a podobně.",
        obrazek: "okrasny-hacek",
        exist: true,
      },
    ]
  },

  {
    nazev: "prize",
    title: "Příze",
    videoURL: "XL4ze9vLC3s",
    kroky: [
      {
        popis: "Dnes můžeme najít obrovské množství značek a materiálů (akrylové, bavlněné, směsové).",
        obrazek: "prize",
        exist: true,
      },
      {
        popis: "Na přebalu klubíčka bývá napsáno, kolik metrů obsahuje a na jak velký háček (popř. jehlice) je dělaná.",
        obrazek: null,
        exist: false,
      },
      {
        popis: "Samozřejmě můžete využít více velikostí na jeden typ příze (např.: Dolphin Baby se dá háčkovat s háčkem velikosti 4, 4.5 nebo 5 mm), ovlivňuje se tím však velikost oček.",
        obrazek: null,
        exist: false,
      },
    ]
  },

  {
    nazev: "znackovac",
    title: "Značkovač",
    videoURL: "XL4ze9vLC3s",
    kroky: [
      {
        popis: "Slouží nám k označení počátku řady, ale dá se použít i jiný kousek příze.",
        obrazek: null,
        exist: false,
      },
      {
        popis: "Značkovač je příjemná pomůcka, která se na trhu objevuje ve více variantách. Spirála je vhodnější pro silnější příze.",
        obrazek: "znackovac-spirala",
        exist: true,
      },
      {
        popis: "Tento má výhodu v tom, že se dá zavřít a je vhodný pro všechny typy příze.",
        obrazek: "znackovac",
        exist: true,
      },
    ]
  },

  {
    nazev: "jehla",
    title: "Jehla",
    videoURL: null,
    kroky: [
      {
        popis: "Na přišívání jednotlivých dílů, zapošívání nitě. Upřednostňované plastové jehly se více hodí, pokud děláte se silnějším typem příze.",
        obrazek: "jehla",
        exist: true,
      },
    ]
  },

  {
    nazev: "nuzky",
    title: "Nůžky",
    videoURL: null,
    kroky: [
      {
        popis: "Nůžky asi už někdy používal každý z nás a u háčkování to není nějak zvlášť jiné.",
        obrazek: "nuzky",
        exist: true,
      },
      {
        popis: "Klasické nůžky na papír nejsou na některé příze vhodné, protože potom ji přestříháváme na několikrát a akorát se nám konec třepí.",
        obrazek: "zdobneNuzky",
        exist: true,
      },
      {
        popis: "Můžete si pořídit nůžky na látku, nebo různé speciálně zdobené, tvarované.",
        obrazek: null,
        exist: false,
      },
    ]
  },

  {
    nazev: "bezpecnostni-oci-a-nos",
    title: "Bezpečnostní oči a nos",
    videoURL: null,
    kroky: [
      {
        popis: "Dnes se dá pořídit spousta tvarů, velikostí a barev očí a nosů s bezpečnostní pojistkou.",
        obrazek: "bezpecnostni-nos",
        exist: true,
      },
      {
        popis: "Uzavírají se jednoduše. Na závit se postupně nasouvá pojistka, která jde zaklapnout tolikrát, kolik má očko závitů.",
        obrazek: "zavit-a-pojistka",
        exist: true,
      },
      {
        popis: "Čím pevněji oko uzavřeme tím hezčí, nebo ošklivější efekt můžeme vytvořit. Je to kus od kusu, výrobek od výrobku.",
        obrazek: "bezpecnostni-oko",
        exist: true,
      },
    ]
  },

  {
    nazev: "chrastitko",
    title: "Chrastítko",
    videoURL: null,
    kroky: [
      {
        popis: "Pokud chcete svůj výrobek nějak ozvláštnit pro dítě, nebo třeba domácího mazlíčka, můžete dovnitř přidat chrastítko.",
        obrazek: "chrastitko",
        exist: true,
      },
      {
        popis: "Ty se dnes vyrábí v různých velikostech, tvarech a každé chrastí jinou intenzitou.",
        obrazek: "chrastitko-kulate",
        exist: true,
      },
    ]
  },

  {
    nazev: "pocitadlo",
    title: "Počítadlo",
    videoURL: null,
    kroky: [
      {
        popis: "Existuje počítadlo manuální a digitální. Obě mají stejný účel. Počítat řady, co jsme dosud vytvořili.",
        obrazek: null,
        exist: false,
      },
      {
        popis: "Manuální může vypadat jako válec a každá jeho strana se dá otáčet. Měníme tak číslovky od 0 do 9. Některá se dají připojit na háček, jiná musíte stále brát a pokládat bokem.",
        obrazek: "manualni",
        exist: true,
      },
      {
        popis: "Mnohem pohodlnější je z tohoto důvodu počítadlo digitální, které se dá připevnit na palec a pouhým mačkáním tlačítek buď posouváte číslo o , nebo celý proces resetujete. Existují i taková počítadla, která umí displej rozsvítit.",
        obrazek: "digitalni",
        exist: true,
      },
    ]
  },

  {
    nazev: "navijec-prize",
    title: "Navíječ příze",
    videoURL: null,
    kroky: [
      {
        popis: "Když se vám klubíčko zasukuje tak, že ho musíte celé rozplést, nebo se vám rozkutálí, tak je navíječ pomocník pro vás. Jedná se o nástroj, který dělá z kusu provázku opět klubíčko. Jednoduše upevníte jeden konec na horní otáčecí válec, přízi napnete a pak už jen točíte kličkou. Navíječ vytvoří klubíčko",
        obrazek: "navijec-prize",
        exist: true,
      },
    ]
  },

  {
    nazev: "vypln",
    title: "Výplň",
    videoURL: null,
    kroky: [
      {
        popis: "Pokud vytváříte něco prostorového (zvířátka, hračky, atd...), tak se vám bude hodit nějaká výplň. Tu může tvořit vata, nebo duté vlákno. Po delší době háčkování můžete použít i zbytky přízí z minulého tvoření. Je to taková recyklace, kterou já uplatňuji třeba u jehelníčků",
        obrazek: "vypln",
        exist: false,
      },
    ]
  }
];

const polePomucekEN = [
  {
    nazev: "hacek",
    title: "Hook",
    videoURL: "bV-dubempbc",
    kroky: [
      {
        popis: "Crochet hooks come in a wide range of sizes.",
        obrazek: null,
        exist: false,
      },
      {
        popis: "They are made from many varied materials (metal, plastic, etc.)",
        obrazek: "hacek",
        exist: true,
      },
      {
        popis: "Hooks can be decorated by handles, ergonomic grips, etc.",
        obrazek: "okrasny-hacek",
        exist: true,
      },
    ]
  },

  {
    nazev: "prize",
    title: "Yarn",
    videoURL: "IOvAdXIL8Vg",
    kroky: [
      {
        popis: "There are a considerable number of brands and materials (acrylic, cotton, mix).",
        obrazek: "prize",
        exist: true,
      },
      {
        popis: "Sometimes on the packaging is written how long the yarn is and what size hook it’s made for.",
        obrazek: null,
        exist: false,
      },
      {
        popis: "You can use more hook sizes on one type of yarn (e.g., For Dolphin Baby (brand of yarn) you can use sizes 4, 4.5, and 5mm). Size affects holes between the stitches.",
        obrazek: null,
        exist: false,
      },
    ]
  },

  {
    nazev: "znackovac",
    title: "Stitch marker",
    videoURL: "LtpxNswfMrs",
    kroky: [
      {
        popis: "Serves the purpose of being an indicator of the start of the row. You can use a piece of yarn.",
        obrazek: null,
        exist: false,
      },
      {
        popis: "The marker is a useful tool, which is sold in a few variants. The spiral is used for thicker yarns.",
        obrazek: "znackovac-spirala",
        exist: true,
      },
      {
        popis: "This one has the advantage that you can close it and that it’s useful for all types of yarn.",
        obrazek: "znackovac",
        exist: true,
      },
    ]
  },

  {
    nazev: "jehla",
    title: "Needle",
    videoURL: "U6YFVgPBqJ4",
    kroky: [
      {
        popis: "For sewing pieces together or incorporating the yarn that’s left into the product. Plastic needles are better if you’re working with a thicker type of yarn.",
        obrazek: "jehla",
        exist: true,
      },
    ]
  },

  {
    nazev: "nuzky",
    title: "Scissors",
    videoURL: "50Hvj3rbFAQ",
    kroky: [
      {
        popis: "Using scissors is an easy task for most people. In crocheting it’s no different.",
        obrazek: "zastrihovaci-nuzky",
        exist: true,
      },
      {
        popis: "Scissors that are used for paper mostly aren’t suitable for yarn and you’ll have to cut it more times and that makes the yarn flutter.",
        obrazek: "nuzky",
        exist: true,
      },
      {
        popis: "You can get scissors that are made for fabric, or in a different shape and with different decorations.",
        obrazek: "zdobene-nuzky",
        exist: true,
      },
    ]
  },

  {
    nazev: "bezpecnostni-oci-a-nos",
    title: "Safety eyes and noses",
    videoURL: "6MKkv62YKcQ",
    kroky: [
      {
        popis: "There are many different shapes, sizes and colors of safety eyes and noses with the washers or without them.",
        obrazek: "bezpecnostni-nos",
        exist: true,
      },
      {
        popis: "They are easy to close. The washer is pushed onto the thread of the nose or eye which can be pushed as many times as there are threads.",
        obrazek: "zavit-a-pojistka",
        exist: true,
      },
      {
        popis: "The more firmly the washer is pushed the “uglier” or “prettier” the effect can be – it depends on the product you’re making.",
        obrazek: "bezpecnostni-oko",
        exist: true,
      },
    ]
  },

  {
    nazev: "chrastitko",
    title: "Rattle",
    videoURL: "ZHjAEHY40-s",
    kroky: [
      {
        popis: "If you want to make your product more kid or pet-friendly and fun, you can put a rattle inside your product.",
        obrazek: "chrastitko",
        exist: true,
      },
      {
        popis: "Rattles are made in different sizes, shapes, and various intensities of the rattle.",
        obrazek: "chrastitko-kulate",
        exist: true,
      },
    ]
  },

  {
    nazev: "pocitadlo",
    title: "Row counter",
    videoURL: null,
    kroky: [
      {
        popis: "There are two types of counters. Manual and digital. Both have the same purpose, to count rows you’ve crocheted.",
        obrazek: null,
        exist: false,
      },
      {
        popis: "Manual counter looks like a cylinder that has two parts; both can be turned. They have numbers from 0 to 9 on them. Some can be put on your hook, and some have to be picked up and put down repeatedly.",
        obrazek: "manualni",
        exist: true,
      },
      {
        popis: "Digital counters are more comfortable, you can put them on your thumb and by clicking a button you raise your current number by one or reset the counter. Some digital counters can light up the display.",
        obrazek: "digitalni",
        exist: true,
      },
    ]
  },

  {
    nazev: "navijec-prize",
    title: "Yarn winder",
    videoURL: null,
    kroky: [
      {
        popis: "If your ball of yarn becomes entangled so you have to untangle it or it unravels before your eyes, the yarn winder is a great tool. This tool takes your yarn and makes it into a ball. You take one side and put it on the top rotating cylinder, strain the yarn and then all you do is just turn the lever.",
        obrazek: "navijec-prize",
        exist: true,
      },
    ]
  },

  {
    nazev: "vypln",
    title: "Filling",
    videoURL: "DvlX75z79tw",
    kroky: [
      {
        popis: "If you’re creating a 3D product (animal, toy, etc.), then you will need filling. Cotton or hollow fiber can be used for filling. You can also use your cut off loose yarn, failed attempts. It’s good for recycling.",
        obrazek: "vypln",
        exist: true,
      },
    ]
  }
];


@Injectable({
  providedIn: 'root'
})
export class PomuckyService {

  pomucky: Map<string, Pomucka>;

  constructor(public translate: TranslateService) {
    this.initMap();
  }

  public getPomuckaByName(name: string): Pomucka {
    return this.pomucky.get(name);
  }

  private initMap() {
    this.pomucky = new Map();
    if (this.translate.currentLang === 'EN') {
      polePomucekEN.forEach(pomucka => {
        this.pomucky.set(pomucka.nazev, pomucka);
      });
    }
    else {
      polePomucekCZ.forEach(pomucka => {
        this.pomucky.set(pomucka.nazev, pomucka);
      });
    }
    
  }
}
